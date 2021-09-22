// package: 
// file: bookstore.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bookstore_pb from "./bookstore_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IBookstoreService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getBook: IBookstoreService_IGetBook;
    updateBook: IBookstoreService_IUpdateBook;
    deleteBook: IBookstoreService_IDeleteBook;
    listBook: IBookstoreService_IListBook;
    createBook: IBookstoreService_ICreateBook;
}

interface IBookstoreService_IGetBook extends grpc.MethodDefinition<bookstore_pb.GetBookRequest, bookstore_pb.GetBookResponse> {
    path: "/Bookstore/GetBook";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bookstore_pb.GetBookRequest>;
    requestDeserialize: grpc.deserialize<bookstore_pb.GetBookRequest>;
    responseSerialize: grpc.serialize<bookstore_pb.GetBookResponse>;
    responseDeserialize: grpc.deserialize<bookstore_pb.GetBookResponse>;
}
interface IBookstoreService_IUpdateBook extends grpc.MethodDefinition<bookstore_pb.UpdateBookRequest, bookstore_pb.UpdateBookResponse> {
    path: "/Bookstore/UpdateBook";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bookstore_pb.UpdateBookRequest>;
    requestDeserialize: grpc.deserialize<bookstore_pb.UpdateBookRequest>;
    responseSerialize: grpc.serialize<bookstore_pb.UpdateBookResponse>;
    responseDeserialize: grpc.deserialize<bookstore_pb.UpdateBookResponse>;
}
interface IBookstoreService_IDeleteBook extends grpc.MethodDefinition<bookstore_pb.DeleteBookRequest, google_protobuf_empty_pb.Empty> {
    path: "/Bookstore/DeleteBook";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bookstore_pb.DeleteBookRequest>;
    requestDeserialize: grpc.deserialize<bookstore_pb.DeleteBookRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IBookstoreService_IListBook extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, bookstore_pb.ListBookResponse> {
    path: "/Bookstore/ListBook";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<bookstore_pb.ListBookResponse>;
    responseDeserialize: grpc.deserialize<bookstore_pb.ListBookResponse>;
}
interface IBookstoreService_ICreateBook extends grpc.MethodDefinition<bookstore_pb.CreateBookRequest, bookstore_pb.CreateBookResponse> {
    path: "/Bookstore/CreateBook";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bookstore_pb.CreateBookRequest>;
    requestDeserialize: grpc.deserialize<bookstore_pb.CreateBookRequest>;
    responseSerialize: grpc.serialize<bookstore_pb.CreateBookResponse>;
    responseDeserialize: grpc.deserialize<bookstore_pb.CreateBookResponse>;
}

export const BookstoreService: IBookstoreService;

export interface IBookstoreServer extends grpc.UntypedServiceImplementation {
    getBook: grpc.handleUnaryCall<bookstore_pb.GetBookRequest, bookstore_pb.GetBookResponse>;
    updateBook: grpc.handleUnaryCall<bookstore_pb.UpdateBookRequest, bookstore_pb.UpdateBookResponse>;
    deleteBook: grpc.handleUnaryCall<bookstore_pb.DeleteBookRequest, google_protobuf_empty_pb.Empty>;
    listBook: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, bookstore_pb.ListBookResponse>;
    createBook: grpc.handleUnaryCall<bookstore_pb.CreateBookRequest, bookstore_pb.CreateBookResponse>;
}

export interface IBookstoreClient {
    getBook(request: bookstore_pb.GetBookRequest, callback: (error: grpc.ServiceError | null, response: bookstore_pb.GetBookResponse) => void): grpc.ClientUnaryCall;
    getBook(request: bookstore_pb.GetBookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bookstore_pb.GetBookResponse) => void): grpc.ClientUnaryCall;
    getBook(request: bookstore_pb.GetBookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bookstore_pb.GetBookResponse) => void): grpc.ClientUnaryCall;
    updateBook(request: bookstore_pb.UpdateBookRequest, callback: (error: grpc.ServiceError | null, response: bookstore_pb.UpdateBookResponse) => void): grpc.ClientUnaryCall;
    updateBook(request: bookstore_pb.UpdateBookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bookstore_pb.UpdateBookResponse) => void): grpc.ClientUnaryCall;
    updateBook(request: bookstore_pb.UpdateBookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bookstore_pb.UpdateBookResponse) => void): grpc.ClientUnaryCall;
    deleteBook(request: bookstore_pb.DeleteBookRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteBook(request: bookstore_pb.DeleteBookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteBook(request: bookstore_pb.DeleteBookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    listBook(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: bookstore_pb.ListBookResponse) => void): grpc.ClientUnaryCall;
    listBook(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bookstore_pb.ListBookResponse) => void): grpc.ClientUnaryCall;
    listBook(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bookstore_pb.ListBookResponse) => void): grpc.ClientUnaryCall;
    createBook(request: bookstore_pb.CreateBookRequest, callback: (error: grpc.ServiceError | null, response: bookstore_pb.CreateBookResponse) => void): grpc.ClientUnaryCall;
    createBook(request: bookstore_pb.CreateBookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bookstore_pb.CreateBookResponse) => void): grpc.ClientUnaryCall;
    createBook(request: bookstore_pb.CreateBookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bookstore_pb.CreateBookResponse) => void): grpc.ClientUnaryCall;
}

export class BookstoreClient extends grpc.Client implements IBookstoreClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getBook(request: bookstore_pb.GetBookRequest, callback: (error: grpc.ServiceError | null, response: bookstore_pb.GetBookResponse) => void): grpc.ClientUnaryCall;
    public getBook(request: bookstore_pb.GetBookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bookstore_pb.GetBookResponse) => void): grpc.ClientUnaryCall;
    public getBook(request: bookstore_pb.GetBookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bookstore_pb.GetBookResponse) => void): grpc.ClientUnaryCall;
    public updateBook(request: bookstore_pb.UpdateBookRequest, callback: (error: grpc.ServiceError | null, response: bookstore_pb.UpdateBookResponse) => void): grpc.ClientUnaryCall;
    public updateBook(request: bookstore_pb.UpdateBookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bookstore_pb.UpdateBookResponse) => void): grpc.ClientUnaryCall;
    public updateBook(request: bookstore_pb.UpdateBookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bookstore_pb.UpdateBookResponse) => void): grpc.ClientUnaryCall;
    public deleteBook(request: bookstore_pb.DeleteBookRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteBook(request: bookstore_pb.DeleteBookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteBook(request: bookstore_pb.DeleteBookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public listBook(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: bookstore_pb.ListBookResponse) => void): grpc.ClientUnaryCall;
    public listBook(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bookstore_pb.ListBookResponse) => void): grpc.ClientUnaryCall;
    public listBook(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bookstore_pb.ListBookResponse) => void): grpc.ClientUnaryCall;
    public createBook(request: bookstore_pb.CreateBookRequest, callback: (error: grpc.ServiceError | null, response: bookstore_pb.CreateBookResponse) => void): grpc.ClientUnaryCall;
    public createBook(request: bookstore_pb.CreateBookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bookstore_pb.CreateBookResponse) => void): grpc.ClientUnaryCall;
    public createBook(request: bookstore_pb.CreateBookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bookstore_pb.CreateBookResponse) => void): grpc.ClientUnaryCall;
}

interface IAuthorsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAuthor: IAuthorsService_IGetAuthor;
    updateAuthor: IAuthorsService_IUpdateAuthor;
    deleteAuthor: IAuthorsService_IDeleteAuthor;
    listAuthor: IAuthorsService_IListAuthor;
    createAuthor: IAuthorsService_ICreateAuthor;
}

interface IAuthorsService_IGetAuthor extends grpc.MethodDefinition<bookstore_pb.GetAuthorRequest, bookstore_pb.GetAuthorResponse> {
    path: "/Authors/GetAuthor";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bookstore_pb.GetAuthorRequest>;
    requestDeserialize: grpc.deserialize<bookstore_pb.GetAuthorRequest>;
    responseSerialize: grpc.serialize<bookstore_pb.GetAuthorResponse>;
    responseDeserialize: grpc.deserialize<bookstore_pb.GetAuthorResponse>;
}
interface IAuthorsService_IUpdateAuthor extends grpc.MethodDefinition<bookstore_pb.UpdateAuthorRequest, bookstore_pb.UpdateAuthorResponse> {
    path: "/Authors/UpdateAuthor";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bookstore_pb.UpdateAuthorRequest>;
    requestDeserialize: grpc.deserialize<bookstore_pb.UpdateAuthorRequest>;
    responseSerialize: grpc.serialize<bookstore_pb.UpdateAuthorResponse>;
    responseDeserialize: grpc.deserialize<bookstore_pb.UpdateAuthorResponse>;
}
interface IAuthorsService_IDeleteAuthor extends grpc.MethodDefinition<bookstore_pb.DeleteAuthorRequest, google_protobuf_empty_pb.Empty> {
    path: "/Authors/DeleteAuthor";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bookstore_pb.DeleteAuthorRequest>;
    requestDeserialize: grpc.deserialize<bookstore_pb.DeleteAuthorRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IAuthorsService_IListAuthor extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, bookstore_pb.ListAuthorResponse> {
    path: "/Authors/ListAuthor";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<bookstore_pb.ListAuthorResponse>;
    responseDeserialize: grpc.deserialize<bookstore_pb.ListAuthorResponse>;
}
interface IAuthorsService_ICreateAuthor extends grpc.MethodDefinition<bookstore_pb.CreateAuthorRequest, bookstore_pb.CreateAuthorResponse> {
    path: "/Authors/CreateAuthor";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bookstore_pb.CreateAuthorRequest>;
    requestDeserialize: grpc.deserialize<bookstore_pb.CreateAuthorRequest>;
    responseSerialize: grpc.serialize<bookstore_pb.CreateAuthorResponse>;
    responseDeserialize: grpc.deserialize<bookstore_pb.CreateAuthorResponse>;
}

export const AuthorsService: IAuthorsService;

export interface IAuthorsServer extends grpc.UntypedServiceImplementation {
    getAuthor: grpc.handleUnaryCall<bookstore_pb.GetAuthorRequest, bookstore_pb.GetAuthorResponse>;
    updateAuthor: grpc.handleUnaryCall<bookstore_pb.UpdateAuthorRequest, bookstore_pb.UpdateAuthorResponse>;
    deleteAuthor: grpc.handleUnaryCall<bookstore_pb.DeleteAuthorRequest, google_protobuf_empty_pb.Empty>;
    listAuthor: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, bookstore_pb.ListAuthorResponse>;
    createAuthor: grpc.handleUnaryCall<bookstore_pb.CreateAuthorRequest, bookstore_pb.CreateAuthorResponse>;
}

export interface IAuthorsClient {
    getAuthor(request: bookstore_pb.GetAuthorRequest, callback: (error: grpc.ServiceError | null, response: bookstore_pb.GetAuthorResponse) => void): grpc.ClientUnaryCall;
    getAuthor(request: bookstore_pb.GetAuthorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bookstore_pb.GetAuthorResponse) => void): grpc.ClientUnaryCall;
    getAuthor(request: bookstore_pb.GetAuthorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bookstore_pb.GetAuthorResponse) => void): grpc.ClientUnaryCall;
    updateAuthor(request: bookstore_pb.UpdateAuthorRequest, callback: (error: grpc.ServiceError | null, response: bookstore_pb.UpdateAuthorResponse) => void): grpc.ClientUnaryCall;
    updateAuthor(request: bookstore_pb.UpdateAuthorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bookstore_pb.UpdateAuthorResponse) => void): grpc.ClientUnaryCall;
    updateAuthor(request: bookstore_pb.UpdateAuthorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bookstore_pb.UpdateAuthorResponse) => void): grpc.ClientUnaryCall;
    deleteAuthor(request: bookstore_pb.DeleteAuthorRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteAuthor(request: bookstore_pb.DeleteAuthorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteAuthor(request: bookstore_pb.DeleteAuthorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    listAuthor(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: bookstore_pb.ListAuthorResponse) => void): grpc.ClientUnaryCall;
    listAuthor(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bookstore_pb.ListAuthorResponse) => void): grpc.ClientUnaryCall;
    listAuthor(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bookstore_pb.ListAuthorResponse) => void): grpc.ClientUnaryCall;
    createAuthor(request: bookstore_pb.CreateAuthorRequest, callback: (error: grpc.ServiceError | null, response: bookstore_pb.CreateAuthorResponse) => void): grpc.ClientUnaryCall;
    createAuthor(request: bookstore_pb.CreateAuthorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bookstore_pb.CreateAuthorResponse) => void): grpc.ClientUnaryCall;
    createAuthor(request: bookstore_pb.CreateAuthorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bookstore_pb.CreateAuthorResponse) => void): grpc.ClientUnaryCall;
}

export class AuthorsClient extends grpc.Client implements IAuthorsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAuthor(request: bookstore_pb.GetAuthorRequest, callback: (error: grpc.ServiceError | null, response: bookstore_pb.GetAuthorResponse) => void): grpc.ClientUnaryCall;
    public getAuthor(request: bookstore_pb.GetAuthorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bookstore_pb.GetAuthorResponse) => void): grpc.ClientUnaryCall;
    public getAuthor(request: bookstore_pb.GetAuthorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bookstore_pb.GetAuthorResponse) => void): grpc.ClientUnaryCall;
    public updateAuthor(request: bookstore_pb.UpdateAuthorRequest, callback: (error: grpc.ServiceError | null, response: bookstore_pb.UpdateAuthorResponse) => void): grpc.ClientUnaryCall;
    public updateAuthor(request: bookstore_pb.UpdateAuthorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bookstore_pb.UpdateAuthorResponse) => void): grpc.ClientUnaryCall;
    public updateAuthor(request: bookstore_pb.UpdateAuthorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bookstore_pb.UpdateAuthorResponse) => void): grpc.ClientUnaryCall;
    public deleteAuthor(request: bookstore_pb.DeleteAuthorRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteAuthor(request: bookstore_pb.DeleteAuthorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteAuthor(request: bookstore_pb.DeleteAuthorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public listAuthor(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: bookstore_pb.ListAuthorResponse) => void): grpc.ClientUnaryCall;
    public listAuthor(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bookstore_pb.ListAuthorResponse) => void): grpc.ClientUnaryCall;
    public listAuthor(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bookstore_pb.ListAuthorResponse) => void): grpc.ClientUnaryCall;
    public createAuthor(request: bookstore_pb.CreateAuthorRequest, callback: (error: grpc.ServiceError | null, response: bookstore_pb.CreateAuthorResponse) => void): grpc.ClientUnaryCall;
    public createAuthor(request: bookstore_pb.CreateAuthorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bookstore_pb.CreateAuthorResponse) => void): grpc.ClientUnaryCall;
    public createAuthor(request: bookstore_pb.CreateAuthorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bookstore_pb.CreateAuthorResponse) => void): grpc.ClientUnaryCall;
}
