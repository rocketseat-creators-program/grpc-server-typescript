import { sendUnaryData, ServerUnaryCall, StatusObject } from '@grpc/grpc-js'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import {
  CreateAuthorRequest,
  CreateAuthorResponse,
  DeleteAuthorRequest,
  GetAuthorRequest,
  GetAuthorResponse,
  ListAuthorResponse,
  UpdateAuthorRequest,
  UpdateAuthorResponse
} from '../../proto/bookstore_pb'
import { DB } from '../db'
import inject from '../lib/inject'

function GetAuthor (call: ServerUnaryCall<GetAuthorRequest, GetAuthorResponse>, callback: sendUnaryData<GetAuthorResponse>, database: DB) {
  try {
    const response = new GetAuthorResponse()
    response.setAuthors(assertAuthor(database, call.request.getAuthorid()))
    return callback(null, response)
  } catch (error) {
    return callback(error as StatusObject, null)
  }
}

function UpdateAuthor (call: ServerUnaryCall<UpdateAuthorRequest, UpdateAuthorResponse>, callback: sendUnaryData<UpdateAuthorResponse>, database: DB) {
  try {
    assertAuthor(database, call.request.getAuthorid())
    const newAuthor = database.updateAuthor(call.request.getAuthorid(), call.request.getData()!)
    database.save()
    return callback(null, (new UpdateAuthorResponse()).setAuthors(newAuthor))
  } catch (error) {
    return callback(error as StatusObject, null)
  }
}

function DeleteAuthor (call: ServerUnaryCall<DeleteAuthorRequest, Empty>, callback: sendUnaryData<Empty>, database: DB) {
  try {
    assertAuthor(database, call.request.getAuthorid())
    database.deleteAuthor(call.request.getAuthorid())
    database.save()
    return callback(null, new Empty())
  } catch (error) {
    return callback(error as StatusObject, null)
  }
}

function ListAuthor (_: ServerUnaryCall<Empty, ListAuthorResponse>, callback: sendUnaryData<ListAuthorResponse>, database: DB) {
  return callback(null, (new ListAuthorResponse()).setAuthorsList(database.listAuthors()))
}

function CreateAuthor (call: ServerUnaryCall<CreateAuthorRequest, CreateAuthorResponse>, callback: sendUnaryData<CreateAuthorResponse>, database: DB) {
  try {
    const newAuthor = database.addAuthor(call.request.getAuthor()!)
    database.save()
    return callback(null, (new CreateAuthorResponse()).setAuthors(newAuthor))
  } catch (error) {
    return callback(error as StatusObject, null)
  }
}

function assertAuthor (database: DB, id: string) {
  const author = database.getAuthor(id)
  if (!author) throw new Error(`Author ${id} not found`)
  return author
}

export function getImplementation (databaseInstance: DB) {
  return {
    getAuthor: inject(GetAuthor, databaseInstance),
    updateAuthor: inject(UpdateAuthor, databaseInstance),
    deleteAuthor: inject(DeleteAuthor, databaseInstance),
    listAuthor: inject(ListAuthor, databaseInstance),
    createAuthor: inject(CreateAuthor, databaseInstance)
  }
}
