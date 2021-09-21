const inject = require('../lib/inject')

function GetAuthor (call, callback, database) {
  try {
    return callback(null, { authors: assertAuthor(database, call.request.authorId) })
  } catch (error) {
    return callback(error, null)
  }
}

function UpdateAuthor (call, callback, database) {
  const { authorId, data } = call.request
  try {
    assertAuthor(database, authorId)
    const newAuthor = database.updateAuthor(authorId, data)
    database.save()
    return callback(null, { authors: newAuthor })
  } catch (error) {
    return callback(error, null)
  }
}

function DeleteAuthor (call, callback, database) {
  const { authorId } = call.request
  try {
    assertAuthor(database, authorId)
    database.deleteAuthor(authorId)
    database.save()
    return callback(null, {})
  } catch (error) {
    return callback(error, null)
  }
}

function ListAuthor (_, callback, database) {
  return callback(null, { authors: database.listAuthors() })
}

function CreateAuthor (call, callback, database) {
  const { author } = call.request
  try {
    const newAuthor = database.addAuthor(author)
    database.save()
    return callback(null, { authors: newAuthor })
  } catch (error) {
    return callback(error, null)
  }
}

function assertAuthor (database, id) {
  const author = database.getAuthor(id)
  if (!author) throw new Error(`Author ${id} not found`)
  return author
}

module.exports = (databaseInstance) => {
  return {
    GetAuthor: inject(GetAuthor, databaseInstance),
    UpdateAuthor: inject(UpdateAuthor, databaseInstance),
    DeleteAuthor: inject(DeleteAuthor, databaseInstance),
    ListAuthor: inject(ListAuthor, databaseInstance),
    CreateAuthor: inject(CreateAuthor, databaseInstance)
  }
}
