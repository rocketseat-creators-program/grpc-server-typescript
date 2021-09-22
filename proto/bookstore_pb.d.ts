// package: 
// file: bookstore.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Book extends jspb.Message { 
    getId(): string;
    setId(value: string): Book;
    getTitle(): string;
    setTitle(value: string): Book;
    getAuthor(): string;
    setAuthor(value: string): Book;

    hasImageUrl(): boolean;
    clearImageUrl(): void;
    getImageUrl(): string | undefined;
    setImageUrl(value: string): Book;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): string | undefined;
    setDescription(value: string): Book;

    hasPublishedDate(): boolean;
    clearPublishedDate(): void;
    getPublishedDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedDate(value?: google_protobuf_timestamp_pb.Timestamp): Book;

    hasPrice(): boolean;
    clearPrice(): void;
    getPrice(): number | undefined;
    setPrice(value: number): Book;

    hasPages(): boolean;
    clearPages(): void;
    getPages(): number | undefined;
    setPages(value: number): Book;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Book.AsObject;
    static toObject(includeInstance: boolean, msg: Book): Book.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Book, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Book;
    static deserializeBinaryFromReader(message: Book, reader: jspb.BinaryReader): Book;
}

export namespace Book {
    export type AsObject = {
        id: string,
        title: string,
        author: string,
        imageUrl?: string,
        description?: string,
        publishedDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        price?: number,
        pages?: number,
    }
}

export class GetBookRequest extends jspb.Message { 
    getBookid(): string;
    setBookid(value: string): GetBookRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBookRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBookRequest): GetBookRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBookRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBookRequest;
    static deserializeBinaryFromReader(message: GetBookRequest, reader: jspb.BinaryReader): GetBookRequest;
}

export namespace GetBookRequest {
    export type AsObject = {
        bookid: string,
    }
}

export class GetBookResponse extends jspb.Message { 

    hasBooks(): boolean;
    clearBooks(): void;
    getBooks(): Book | undefined;
    setBooks(value?: Book): GetBookResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBookResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetBookResponse): GetBookResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBookResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBookResponse;
    static deserializeBinaryFromReader(message: GetBookResponse, reader: jspb.BinaryReader): GetBookResponse;
}

export namespace GetBookResponse {
    export type AsObject = {
        books?: Book.AsObject,
    }
}

export class UpdateBookRequest extends jspb.Message { 
    getBookid(): string;
    setBookid(value: string): UpdateBookRequest;

    hasData(): boolean;
    clearData(): void;
    getData(): UpdateBookRequest.UpdateData | undefined;
    setData(value?: UpdateBookRequest.UpdateData): UpdateBookRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateBookRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateBookRequest): UpdateBookRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateBookRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateBookRequest;
    static deserializeBinaryFromReader(message: UpdateBookRequest, reader: jspb.BinaryReader): UpdateBookRequest;
}

export namespace UpdateBookRequest {
    export type AsObject = {
        bookid: string,
        data?: UpdateBookRequest.UpdateData.AsObject,
    }


    export class UpdateData extends jspb.Message { 

        hasTitle(): boolean;
        clearTitle(): void;
        getTitle(): string | undefined;
        setTitle(value: string): UpdateData;

        hasAuthor(): boolean;
        clearAuthor(): void;
        getAuthor(): string | undefined;
        setAuthor(value: string): UpdateData;

        hasImageUrl(): boolean;
        clearImageUrl(): void;
        getImageUrl(): string | undefined;
        setImageUrl(value: string): UpdateData;

        hasDescription(): boolean;
        clearDescription(): void;
        getDescription(): string | undefined;
        setDescription(value: string): UpdateData;

        hasPublishedDate(): boolean;
        clearPublishedDate(): void;
        getPublishedDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setPublishedDate(value?: google_protobuf_timestamp_pb.Timestamp): UpdateData;

        hasPrice(): boolean;
        clearPrice(): void;
        getPrice(): number | undefined;
        setPrice(value: number): UpdateData;

        hasPages(): boolean;
        clearPages(): void;
        getPages(): number | undefined;
        setPages(value: number): UpdateData;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): UpdateData.AsObject;
        static toObject(includeInstance: boolean, msg: UpdateData): UpdateData.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: UpdateData, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): UpdateData;
        static deserializeBinaryFromReader(message: UpdateData, reader: jspb.BinaryReader): UpdateData;
    }

    export namespace UpdateData {
        export type AsObject = {
            title?: string,
            author?: string,
            imageUrl?: string,
            description?: string,
            publishedDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            price?: number,
            pages?: number,
        }
    }

}

export class UpdateBookResponse extends jspb.Message { 

    hasBooks(): boolean;
    clearBooks(): void;
    getBooks(): Book | undefined;
    setBooks(value?: Book): UpdateBookResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateBookResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateBookResponse): UpdateBookResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateBookResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateBookResponse;
    static deserializeBinaryFromReader(message: UpdateBookResponse, reader: jspb.BinaryReader): UpdateBookResponse;
}

export namespace UpdateBookResponse {
    export type AsObject = {
        books?: Book.AsObject,
    }
}

export class DeleteBookRequest extends jspb.Message { 
    getBookid(): string;
    setBookid(value: string): DeleteBookRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteBookRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteBookRequest): DeleteBookRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteBookRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteBookRequest;
    static deserializeBinaryFromReader(message: DeleteBookRequest, reader: jspb.BinaryReader): DeleteBookRequest;
}

export namespace DeleteBookRequest {
    export type AsObject = {
        bookid: string,
    }
}

export class CreateBookRequest extends jspb.Message { 

    hasBook(): boolean;
    clearBook(): void;
    getBook(): CreateBookRequest.CreateBookData | undefined;
    setBook(value?: CreateBookRequest.CreateBookData): CreateBookRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateBookRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateBookRequest): CreateBookRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateBookRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateBookRequest;
    static deserializeBinaryFromReader(message: CreateBookRequest, reader: jspb.BinaryReader): CreateBookRequest;
}

export namespace CreateBookRequest {
    export type AsObject = {
        book?: CreateBookRequest.CreateBookData.AsObject,
    }


    export class CreateBookData extends jspb.Message { 
        getTitle(): string;
        setTitle(value: string): CreateBookData;
        getAuthor(): string;
        setAuthor(value: string): CreateBookData;

        hasImageUrl(): boolean;
        clearImageUrl(): void;
        getImageUrl(): string | undefined;
        setImageUrl(value: string): CreateBookData;
        getDescription(): string;
        setDescription(value: string): CreateBookData;

        hasPublishedDate(): boolean;
        clearPublishedDate(): void;
        getPublishedDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setPublishedDate(value?: google_protobuf_timestamp_pb.Timestamp): CreateBookData;

        hasPrice(): boolean;
        clearPrice(): void;
        getPrice(): number | undefined;
        setPrice(value: number): CreateBookData;
        getPages(): number;
        setPages(value: number): CreateBookData;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): CreateBookData.AsObject;
        static toObject(includeInstance: boolean, msg: CreateBookData): CreateBookData.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: CreateBookData, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): CreateBookData;
        static deserializeBinaryFromReader(message: CreateBookData, reader: jspb.BinaryReader): CreateBookData;
    }

    export namespace CreateBookData {
        export type AsObject = {
            title: string,
            author: string,
            imageUrl?: string,
            description: string,
            publishedDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            price?: number,
            pages: number,
        }
    }

}

export class CreateBookResponse extends jspb.Message { 

    hasBooks(): boolean;
    clearBooks(): void;
    getBooks(): Book | undefined;
    setBooks(value?: Book): CreateBookResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateBookResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateBookResponse): CreateBookResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateBookResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateBookResponse;
    static deserializeBinaryFromReader(message: CreateBookResponse, reader: jspb.BinaryReader): CreateBookResponse;
}

export namespace CreateBookResponse {
    export type AsObject = {
        books?: Book.AsObject,
    }
}

export class ListBookResponse extends jspb.Message { 
    clearBooksList(): void;
    getBooksList(): Array<Book>;
    setBooksList(value: Array<Book>): ListBookResponse;
    addBooks(value?: Book, index?: number): Book;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListBookResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListBookResponse): ListBookResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListBookResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListBookResponse;
    static deserializeBinaryFromReader(message: ListBookResponse, reader: jspb.BinaryReader): ListBookResponse;
}

export namespace ListBookResponse {
    export type AsObject = {
        booksList: Array<Book.AsObject>,
    }
}

export class Author extends jspb.Message { 
    getId(): string;
    setId(value: string): Author;
    getName(): string;
    setName(value: string): Author;

    hasImageUrl(): boolean;
    clearImageUrl(): void;
    getImageUrl(): string | undefined;
    setImageUrl(value: string): Author;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): string | undefined;
    setDescription(value: string): Author;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Author.AsObject;
    static toObject(includeInstance: boolean, msg: Author): Author.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Author, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Author;
    static deserializeBinaryFromReader(message: Author, reader: jspb.BinaryReader): Author;
}

export namespace Author {
    export type AsObject = {
        id: string,
        name: string,
        imageUrl?: string,
        description?: string,
    }
}

export class GetAuthorRequest extends jspb.Message { 
    getAuthorid(): string;
    setAuthorid(value: string): GetAuthorRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAuthorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAuthorRequest): GetAuthorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAuthorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAuthorRequest;
    static deserializeBinaryFromReader(message: GetAuthorRequest, reader: jspb.BinaryReader): GetAuthorRequest;
}

export namespace GetAuthorRequest {
    export type AsObject = {
        authorid: string,
    }
}

export class GetAuthorResponse extends jspb.Message { 

    hasAuthors(): boolean;
    clearAuthors(): void;
    getAuthors(): Author | undefined;
    setAuthors(value?: Author): GetAuthorResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAuthorResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAuthorResponse): GetAuthorResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAuthorResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAuthorResponse;
    static deserializeBinaryFromReader(message: GetAuthorResponse, reader: jspb.BinaryReader): GetAuthorResponse;
}

export namespace GetAuthorResponse {
    export type AsObject = {
        authors?: Author.AsObject,
    }
}

export class UpdateAuthorRequest extends jspb.Message { 
    getAuthorid(): string;
    setAuthorid(value: string): UpdateAuthorRequest;

    hasData(): boolean;
    clearData(): void;
    getData(): UpdateAuthorRequest.UpdateData | undefined;
    setData(value?: UpdateAuthorRequest.UpdateData): UpdateAuthorRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAuthorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAuthorRequest): UpdateAuthorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAuthorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAuthorRequest;
    static deserializeBinaryFromReader(message: UpdateAuthorRequest, reader: jspb.BinaryReader): UpdateAuthorRequest;
}

export namespace UpdateAuthorRequest {
    export type AsObject = {
        authorid: string,
        data?: UpdateAuthorRequest.UpdateData.AsObject,
    }


    export class UpdateData extends jspb.Message { 

        hasName(): boolean;
        clearName(): void;
        getName(): string | undefined;
        setName(value: string): UpdateData;

        hasImageUrl(): boolean;
        clearImageUrl(): void;
        getImageUrl(): string | undefined;
        setImageUrl(value: string): UpdateData;

        hasDescription(): boolean;
        clearDescription(): void;
        getDescription(): string | undefined;
        setDescription(value: string): UpdateData;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): UpdateData.AsObject;
        static toObject(includeInstance: boolean, msg: UpdateData): UpdateData.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: UpdateData, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): UpdateData;
        static deserializeBinaryFromReader(message: UpdateData, reader: jspb.BinaryReader): UpdateData;
    }

    export namespace UpdateData {
        export type AsObject = {
            name?: string,
            imageUrl?: string,
            description?: string,
        }
    }

}

export class UpdateAuthorResponse extends jspb.Message { 

    hasAuthors(): boolean;
    clearAuthors(): void;
    getAuthors(): Author | undefined;
    setAuthors(value?: Author): UpdateAuthorResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAuthorResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAuthorResponse): UpdateAuthorResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAuthorResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAuthorResponse;
    static deserializeBinaryFromReader(message: UpdateAuthorResponse, reader: jspb.BinaryReader): UpdateAuthorResponse;
}

export namespace UpdateAuthorResponse {
    export type AsObject = {
        authors?: Author.AsObject,
    }
}

export class DeleteAuthorRequest extends jspb.Message { 
    getAuthorid(): string;
    setAuthorid(value: string): DeleteAuthorRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteAuthorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteAuthorRequest): DeleteAuthorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteAuthorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteAuthorRequest;
    static deserializeBinaryFromReader(message: DeleteAuthorRequest, reader: jspb.BinaryReader): DeleteAuthorRequest;
}

export namespace DeleteAuthorRequest {
    export type AsObject = {
        authorid: string,
    }
}

export class ListAuthorResponse extends jspb.Message { 
    clearAuthorsList(): void;
    getAuthorsList(): Array<Author>;
    setAuthorsList(value: Array<Author>): ListAuthorResponse;
    addAuthors(value?: Author, index?: number): Author;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAuthorResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListAuthorResponse): ListAuthorResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAuthorResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAuthorResponse;
    static deserializeBinaryFromReader(message: ListAuthorResponse, reader: jspb.BinaryReader): ListAuthorResponse;
}

export namespace ListAuthorResponse {
    export type AsObject = {
        authorsList: Array<Author.AsObject>,
    }
}

export class CreateAuthorRequest extends jspb.Message { 

    hasAuthor(): boolean;
    clearAuthor(): void;
    getAuthor(): CreateAuthorRequest.AuthorCreateData | undefined;
    setAuthor(value?: CreateAuthorRequest.AuthorCreateData): CreateAuthorRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAuthorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAuthorRequest): CreateAuthorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAuthorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAuthorRequest;
    static deserializeBinaryFromReader(message: CreateAuthorRequest, reader: jspb.BinaryReader): CreateAuthorRequest;
}

export namespace CreateAuthorRequest {
    export type AsObject = {
        author?: CreateAuthorRequest.AuthorCreateData.AsObject,
    }


    export class AuthorCreateData extends jspb.Message { 
        getName(): string;
        setName(value: string): AuthorCreateData;

        hasImageUrl(): boolean;
        clearImageUrl(): void;
        getImageUrl(): string | undefined;
        setImageUrl(value: string): AuthorCreateData;

        hasDescription(): boolean;
        clearDescription(): void;
        getDescription(): string | undefined;
        setDescription(value: string): AuthorCreateData;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AuthorCreateData.AsObject;
        static toObject(includeInstance: boolean, msg: AuthorCreateData): AuthorCreateData.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AuthorCreateData, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AuthorCreateData;
        static deserializeBinaryFromReader(message: AuthorCreateData, reader: jspb.BinaryReader): AuthorCreateData;
    }

    export namespace AuthorCreateData {
        export type AsObject = {
            name: string,
            imageUrl?: string,
            description?: string,
        }
    }

}

export class CreateAuthorResponse extends jspb.Message { 

    hasAuthors(): boolean;
    clearAuthors(): void;
    getAuthors(): Author | undefined;
    setAuthors(value?: Author): CreateAuthorResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAuthorResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAuthorResponse): CreateAuthorResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAuthorResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAuthorResponse;
    static deserializeBinaryFromReader(message: CreateAuthorResponse, reader: jspb.BinaryReader): CreateAuthorResponse;
}

export namespace CreateAuthorResponse {
    export type AsObject = {
        authors?: Author.AsObject,
    }
}
