const inject = require('../lib/inject')

function GetBook (call, callback, database) {
  const { bookId } = call.request
  try {
    const book = assertBook(database, bookId)
    return callback(null, { books: book })
  } catch (error) {
    return callback(error, null)
  }
}

function UpdateBook (call, callback, database) {
  const { bookId, data } = call.request
  try {
    assertBook(database, bookId)
    const newBook = database.updateBook(bookId, data)
    database.save()
    return callback(null, { books: newBook })
  } catch (error) {
    return callback(error, null)
  }
}

function DeleteBook (call, callback, database) {
  const { bookId } = call.request
  try {
    assertBook(database, bookId)
    database.deleteBook(bookId)
    database.save()
    return callback(null, {})
  } catch (error) {
    return callback(error, null)
  }
}

function ListBook (_, callback, database) {
    return callback(null, { books: database.listBooks() })
}

function CreateBook (call, callback, database) {
  const { book } = call.request
  try {
    const newBook = database.addBook(book)
    database.save()
    return callback(null, { books: newBook })
  } catch (error) {
    return callback(error, null)
  }
}

function assertBook (database, id) {
  const book = database.getBook(id)
  if (!book) throw new Error(`Book ${id} not found`)
  return book
}

module.exports = (databaseInstance) => {
  return {
    GetBook: inject(GetBook, databaseInstance),
    UpdateBook: inject(UpdateBook, databaseInstance),
    DeleteBook: inject(DeleteBook, databaseInstance),
    ListBook: inject(ListBook, databaseInstance),
    CreateBook: inject(CreateBook, databaseInstance)
  }
}
