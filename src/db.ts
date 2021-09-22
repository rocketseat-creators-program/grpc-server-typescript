import { accessSync, constants, readFileSync, writeFileSync } from 'fs'
import path from 'path'
import crypto from 'crypto'
import { Author, Book, CreateAuthorRequest, CreateBookRequest, UpdateAuthorRequest, UpdateBookRequest } from '../proto/bookstore_pb'
import { camelCase } from 'change-case'

export class DB {
  // Importante ser pública
  // Caso contrário não conseguimos buscar do teste
  data: { books: Map<string, Book.AsObject>, authors: Map<string, Author.AsObject> } = {
    books: new Map(),
    authors: new Map()
  }
  private readonly dbPath = path.resolve(__dirname, '../db/db.json')

  constructor (dbPath = null, initialData = null) {
    if (dbPath) this.dbPath = dbPath
    try {
      if (!initialData) accessSync(this.dbPath, constants.F_OK)
      this.load(initialData)
    } catch (error) {
      this.save()
    }
  }

  load (initialData = null) {
    const readData = initialData ? initialData : JSON.parse(readFileSync(this.dbPath, 'utf8'))
    this.data = {
      books: new Map(Array.isArray(readData.books) ? readData.books : new Map()),
      authors: new Map(Array.isArray(readData.authors) ? readData.authors : new Map())
    }
  }

  save () {
    return writeFileSync(this.dbPath, JSON.stringify({
      books: [...this.data.books.entries()],
      authors: [...this.data.authors.entries()]
    }))
  }

  addBook (book: CreateBookRequest.CreateBookData) {
    const id = crypto.createHash('sha256').update(book.getTitle() + book.getAuthor()).digest('hex')
    if (this.getBook(id)) throw new Error(`Book "${book.getTitle()}" by "${this.getAuthor(book.getAuthor())!.getName()}" already exists`)
    if (!this.getAuthor(book.getAuthor())) throw new Error(`Author "${book.getAuthor()}" not found`)

    this.data.books.set(id, { ...book.toObject(), id })
    return this.getBook(id)
  }

  updateBook (bookId: string, updateData: UpdateBookRequest.UpdateData) {
    if (!this.data.books.has(bookId)) throw new Error(`Book "${bookId}" not found`)
    this.data.books.set(bookId, { ...this.data.books.get(bookId)!, ...this.removeEmptyKeys(updateData) })
    return this.getBook(bookId)
  }

  deleteBook (id: string) {
    this.data.books.delete(id)
    return this
  }

  getBook (id: string) {
    const doc = this.data.books.get(id)
    if (!doc) return
    return this.fromObject(new Book(), doc) as Book
  }

  listBooks () {
    return [...this.data.books.values()].map(doc => this.fromObject(new Book(), doc)) as Book[]
  }

  // ------

  addAuthor (author: CreateAuthorRequest.AuthorCreateData) {
    const id = crypto.createHash('sha256').update(author.getName()).digest('hex')
    if (this.getAuthor(id)) throw new Error(`Author "${author.getName()}" already exists`)
    this.data.authors.set(id, { ...author.toObject(), id })
    return this.getAuthor(id)
  }

  updateAuthor (authorId: string, updateData: UpdateAuthorRequest.UpdateData) {
    if (!this.data.authors.has(authorId)) throw new Error(`Author "${authorId}" not found`)
    this.data.authors.set(authorId, { ...this.data.authors.get(authorId)!, ...this.removeEmptyKeys(updateData) })
    return this.getAuthor(authorId)
  }

  deleteAuthor (id: string) {
    this.data.authors.delete(id)
    return this
  }

  listAuthors () {
    return [...this.data.authors.values()].map(doc => this.fromObject(new Author, doc)) as Author[]
  }

  getAuthor (id: string) {
    const author = this.data.authors.get(id)
    if (!author) return
    return this.fromObject(new Author, author) as Author
  }

  // -------

  private fromObject (instance: Book | Author, document?: Book.AsObject | Author.AsObject): typeof instance | undefined {
    if (!document) return
    for (const property in instance) {
      if (!/^set(?!Extension).*/g.test(property)) continue
      const propName = camelCase(property.replace('set', ''))
      const setter: (value: any) => typeof instance = instance[property]
      setter.call(instance, document[propName])
    }
    return instance
  }

  private removeEmptyKeys (obj: UpdateAuthorRequest.UpdateData | UpdateBookRequest.UpdateData) {
    const clonedData = Object.assign({}, obj.toObject())
    Object.keys(clonedData).forEach(key => !clonedData[key] && delete clonedData[key])
    return clonedData
  }
}
