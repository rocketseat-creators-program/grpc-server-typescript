async function GetAuthor (call, database) {
  const authors = assertAuthor(database, call.request.authorId)
  return { authors }
}

async function UpdateAuthor (call, database) {
  const { authorId, data } = call.request
  assertAuthor(database, authorId)
  const newAuthor = database.updateAuthor(authorId, data)
  database.save()
  return { authors: newAuthor }
}

async function DeleteAuthor (call, database) {
  const { authorId } = call.request
  assertAuthor(database, authorId)
  database.deleteAuthor(authorId)
  database.save()
}

async function ListAuthor (_, database) {
  return { authors: database.listAuthors() }
}

async function CreateAuthor (call, database) {
  const { author } = call.request
  const newAuthor = database.addAuthor(author)
  database.save()
  return { authors: newAuthor }
}

function assertAuthor (database, id) {
  const author = database.getAuthor(id)
  if (!author) throw new Error(`Author ${id} not found`)
  return author
}

module.exports = ({
  GetAuthor,
  UpdateAuthor,
  DeleteAuthor,
  ListAuthor,
  CreateAuthor
})
