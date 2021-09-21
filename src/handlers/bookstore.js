async function GetBook (call, database) {
  const { bookId } = call.request
  const book = assertBook(database, bookId)
  return { books: book }
}

async function UpdateBook (call, database) {
  const { bookId, data } = call.request
  assertBook(database, bookId)
  const newBook = database.updateBook(bookId, data)
  database.save()
  return { books: newBook }
}

async function DeleteBook (call, database) {
  const { bookId } = call.request
  assertBook(database, bookId)
  database.deleteBook(bookId)
  database.save()
}

async function ListBook (_, database) {
  return { books: database.listBooks() }
}

async function CreateBook (call, database) {
  const { book } = call.request
  const newBook = database.addBook(book)
  database.save()
  return { books: newBook }
}

function assertBook (database, id) {
  const book = database.getBook(id)
  if (!book) throw new Error(`Book ${id} not found`)
  return book
}

module.exports = ({
  GetBook,
  UpdateBook,
  DeleteBook,
  ListBook,
  CreateBook
})
