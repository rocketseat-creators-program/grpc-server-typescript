import { sendUnaryData, ServerUnaryCall, StatusObject } from '@grpc/grpc-js'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import { CreateBookRequest, CreateBookResponse, DeleteBookRequest, GetBookRequest, GetBookResponse, ListBookResponse, UpdateBookRequest, UpdateBookResponse } from '../../proto/bookstore_pb'
import { DB } from '../db'
import inject from '../lib/inject'

function GetBook (call: ServerUnaryCall<GetBookRequest, GetBookResponse>, callback: sendUnaryData<GetBookResponse>, database: DB) {
  try {
    const book = assertBook(database, call.request.getBookid())
    const response = new GetBookResponse()
    response.setBooks(book)
    return callback(null, response)
  } catch (error) {
    return callback(error as StatusObject, null)
  }
}

function UpdateBook (call: ServerUnaryCall<UpdateBookRequest, UpdateBookResponse>, callback: sendUnaryData<UpdateBookResponse>, database: DB) {
  try {
    assertBook(database, call.request.getBookid())
    const newBook = database.updateBook(call.request.getBookid(), call.request.getData()!)
    database.save()
    return callback(null, (new UpdateBookResponse()).setBooks(newBook))
  } catch (error) {
    return callback(error as StatusObject, null)
  }
}

function DeleteBook (call: ServerUnaryCall<DeleteBookRequest, Empty>, callback: sendUnaryData<Empty>, database: DB) {
  try {
    assertBook(database, call.request.getBookid())
    database.deleteBook(call.request.getBookid())
    database.save()
    return callback(null, new Empty())
  } catch (error) {
    return callback(error as StatusObject, null)
  }
}

function ListBook (_: ServerUnaryCall<Empty, ListBookResponse>, callback: sendUnaryData<ListBookResponse>, database: DB) {
  const response = new ListBookResponse()
  response.setBooksList(database.listBooks())
  return callback(null, (new ListBookResponse()).setBooksList(database.listBooks()))
}

function CreateBook (call: ServerUnaryCall<CreateBookRequest, CreateBookResponse>, callback: sendUnaryData<CreateBookResponse>, database: DB) {
  try {
    const newBook = database.addBook(call.request.getBook()!)
    database.save()
    return callback(null, (new CreateBookResponse()).setBooks(newBook))
  } catch (error) {
    return callback(error as StatusObject, null)
  }
}

function assertBook (database: DB, id: string) {
  const book = database.getBook(id)
  if (!book) throw new Error(`Book ${id} not found`)
  return book
}

export function getImplementation (databaseInstance: DB) {
  return {
    getBook: inject(GetBook, databaseInstance),
    updateBook: inject(UpdateBook, databaseInstance),
    deleteBook: inject(DeleteBook, databaseInstance),
    listBook: inject(ListBook, databaseInstance),
    createBook: inject(CreateBook, databaseInstance)
  }
}
