// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var bookstore_pb = require('./bookstore_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_CreateAuthorRequest(arg) {
  if (!(arg instanceof bookstore_pb.CreateAuthorRequest)) {
    throw new Error('Expected argument of type CreateAuthorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateAuthorRequest(buffer_arg) {
  return bookstore_pb.CreateAuthorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateAuthorResponse(arg) {
  if (!(arg instanceof bookstore_pb.CreateAuthorResponse)) {
    throw new Error('Expected argument of type CreateAuthorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateAuthorResponse(buffer_arg) {
  return bookstore_pb.CreateAuthorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateBookRequest(arg) {
  if (!(arg instanceof bookstore_pb.CreateBookRequest)) {
    throw new Error('Expected argument of type CreateBookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateBookRequest(buffer_arg) {
  return bookstore_pb.CreateBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateBookResponse(arg) {
  if (!(arg instanceof bookstore_pb.CreateBookResponse)) {
    throw new Error('Expected argument of type CreateBookResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateBookResponse(buffer_arg) {
  return bookstore_pb.CreateBookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DeleteAuthorRequest(arg) {
  if (!(arg instanceof bookstore_pb.DeleteAuthorRequest)) {
    throw new Error('Expected argument of type DeleteAuthorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DeleteAuthorRequest(buffer_arg) {
  return bookstore_pb.DeleteAuthorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DeleteBookRequest(arg) {
  if (!(arg instanceof bookstore_pb.DeleteBookRequest)) {
    throw new Error('Expected argument of type DeleteBookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DeleteBookRequest(buffer_arg) {
  return bookstore_pb.DeleteBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetAuthorRequest(arg) {
  if (!(arg instanceof bookstore_pb.GetAuthorRequest)) {
    throw new Error('Expected argument of type GetAuthorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetAuthorRequest(buffer_arg) {
  return bookstore_pb.GetAuthorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetAuthorResponse(arg) {
  if (!(arg instanceof bookstore_pb.GetAuthorResponse)) {
    throw new Error('Expected argument of type GetAuthorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetAuthorResponse(buffer_arg) {
  return bookstore_pb.GetAuthorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetBookRequest(arg) {
  if (!(arg instanceof bookstore_pb.GetBookRequest)) {
    throw new Error('Expected argument of type GetBookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetBookRequest(buffer_arg) {
  return bookstore_pb.GetBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetBookResponse(arg) {
  if (!(arg instanceof bookstore_pb.GetBookResponse)) {
    throw new Error('Expected argument of type GetBookResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetBookResponse(buffer_arg) {
  return bookstore_pb.GetBookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ListAuthorResponse(arg) {
  if (!(arg instanceof bookstore_pb.ListAuthorResponse)) {
    throw new Error('Expected argument of type ListAuthorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListAuthorResponse(buffer_arg) {
  return bookstore_pb.ListAuthorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ListBookResponse(arg) {
  if (!(arg instanceof bookstore_pb.ListBookResponse)) {
    throw new Error('Expected argument of type ListBookResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListBookResponse(buffer_arg) {
  return bookstore_pb.ListBookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateAuthorRequest(arg) {
  if (!(arg instanceof bookstore_pb.UpdateAuthorRequest)) {
    throw new Error('Expected argument of type UpdateAuthorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateAuthorRequest(buffer_arg) {
  return bookstore_pb.UpdateAuthorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateAuthorResponse(arg) {
  if (!(arg instanceof bookstore_pb.UpdateAuthorResponse)) {
    throw new Error('Expected argument of type UpdateAuthorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateAuthorResponse(buffer_arg) {
  return bookstore_pb.UpdateAuthorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateBookRequest(arg) {
  if (!(arg instanceof bookstore_pb.UpdateBookRequest)) {
    throw new Error('Expected argument of type UpdateBookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateBookRequest(buffer_arg) {
  return bookstore_pb.UpdateBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateBookResponse(arg) {
  if (!(arg instanceof bookstore_pb.UpdateBookResponse)) {
    throw new Error('Expected argument of type UpdateBookResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateBookResponse(buffer_arg) {
  return bookstore_pb.UpdateBookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var BookstoreService = exports.BookstoreService = {
  getBook: {
    path: '/Bookstore/GetBook',
    requestStream: false,
    responseStream: false,
    requestType: bookstore_pb.GetBookRequest,
    responseType: bookstore_pb.GetBookResponse,
    requestSerialize: serialize_GetBookRequest,
    requestDeserialize: deserialize_GetBookRequest,
    responseSerialize: serialize_GetBookResponse,
    responseDeserialize: deserialize_GetBookResponse,
  },
  updateBook: {
    path: '/Bookstore/UpdateBook',
    requestStream: false,
    responseStream: false,
    requestType: bookstore_pb.UpdateBookRequest,
    responseType: bookstore_pb.UpdateBookResponse,
    requestSerialize: serialize_UpdateBookRequest,
    requestDeserialize: deserialize_UpdateBookRequest,
    responseSerialize: serialize_UpdateBookResponse,
    responseDeserialize: deserialize_UpdateBookResponse,
  },
  deleteBook: {
    path: '/Bookstore/DeleteBook',
    requestStream: false,
    responseStream: false,
    requestType: bookstore_pb.DeleteBookRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_DeleteBookRequest,
    requestDeserialize: deserialize_DeleteBookRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  listBook: {
    path: '/Bookstore/ListBook',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: bookstore_pb.ListBookResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_ListBookResponse,
    responseDeserialize: deserialize_ListBookResponse,
  },
  createBook: {
    path: '/Bookstore/CreateBook',
    requestStream: false,
    responseStream: false,
    requestType: bookstore_pb.CreateBookRequest,
    responseType: bookstore_pb.CreateBookResponse,
    requestSerialize: serialize_CreateBookRequest,
    requestDeserialize: deserialize_CreateBookRequest,
    responseSerialize: serialize_CreateBookResponse,
    responseDeserialize: deserialize_CreateBookResponse,
  },
};

exports.BookstoreClient = grpc.makeGenericClientConstructor(BookstoreService);
var AuthorsService = exports.AuthorsService = {
  getAuthor: {
    path: '/Authors/GetAuthor',
    requestStream: false,
    responseStream: false,
    requestType: bookstore_pb.GetAuthorRequest,
    responseType: bookstore_pb.GetAuthorResponse,
    requestSerialize: serialize_GetAuthorRequest,
    requestDeserialize: deserialize_GetAuthorRequest,
    responseSerialize: serialize_GetAuthorResponse,
    responseDeserialize: deserialize_GetAuthorResponse,
  },
  updateAuthor: {
    path: '/Authors/UpdateAuthor',
    requestStream: false,
    responseStream: false,
    requestType: bookstore_pb.UpdateAuthorRequest,
    responseType: bookstore_pb.UpdateAuthorResponse,
    requestSerialize: serialize_UpdateAuthorRequest,
    requestDeserialize: deserialize_UpdateAuthorRequest,
    responseSerialize: serialize_UpdateAuthorResponse,
    responseDeserialize: deserialize_UpdateAuthorResponse,
  },
  deleteAuthor: {
    path: '/Authors/DeleteAuthor',
    requestStream: false,
    responseStream: false,
    requestType: bookstore_pb.DeleteAuthorRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_DeleteAuthorRequest,
    requestDeserialize: deserialize_DeleteAuthorRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  listAuthor: {
    path: '/Authors/ListAuthor',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: bookstore_pb.ListAuthorResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_ListAuthorResponse,
    responseDeserialize: deserialize_ListAuthorResponse,
  },
  createAuthor: {
    path: '/Authors/CreateAuthor',
    requestStream: false,
    responseStream: false,
    requestType: bookstore_pb.CreateAuthorRequest,
    responseType: bookstore_pb.CreateAuthorResponse,
    requestSerialize: serialize_CreateAuthorRequest,
    requestDeserialize: deserialize_CreateAuthorRequest,
    responseSerialize: serialize_CreateAuthorResponse,
    responseDeserialize: deserialize_CreateAuthorResponse,
  },
};

exports.AuthorsClient = grpc.makeGenericClientConstructor(AuthorsService);
