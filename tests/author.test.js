const describe = require('ava')
const sinon = require('sinon')
const authorsImpl = require('../src/handlers/author')
const db = require('../src/db')
const request = (data) => ({ request: data })

const initialData = {
  books: [],
  authors: [["75abf34d45f25ade860e3a8577d4529dab1b3658028ef82584b5ba1a393a4d65", { "name": "Isaac Asimov", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Isaac.Asimov01.jpg/440px-Isaac.Asimov01.jpg", "description": "Isaac Asimov was an American writer and professor of biochemistry at Boston University. He was known for his works of science fiction and popular science. Asimov was a prolific writer, and wrote or edited more than 500 books. He also wrote an estimated 90,000 letters and postcards", "id": "75abf34d45f25ade860e3a8577d4529dab1b3658028ef82584b5ba1a393a4d65" }]]
}


describe('Deve listar os autores', async (assert) => {
  const localDb = new db(null, initialData)
  const spy = sinon.spy(localDb, 'listAuthors')
  const res = await authorsImpl.ListAuthor({}, localDb)
  assert.true(spy.calledOnce)
  assert.true(res.authors.length === 1)
})

describe('Deve dar erro ao remover autores não existentes', async (assert) => {
  const localDb = new db(null, initialData)
  const spy = sinon.spy(localDb, 'deleteAuthor')
  sinon.stub(localDb, 'save').returns()
  sinon.stub(localDb, 'load').returns()

  const err = await assert.throwsAsync(authorsImpl.DeleteAuthor(request({ authorId: 'não existente' }), localDb))
  assert.is(err.message, 'Author não existente not found')
  assert.false(spy.calledOnce)
  assert.true(localDb.data.authors.size === 1)
})

describe('Deve remover um autor existente', async (assert) => {
  const localDb = new db(null, initialData)
  const spy = sinon.spy(localDb, 'deleteAuthor')
  sinon.stub(localDb, 'save').returns()
  sinon.stub(localDb, 'load').returns()

  const res = await authorsImpl.DeleteAuthor(request({
    authorId: '75abf34d45f25ade860e3a8577d4529dab1b3658028ef82584b5ba1a393a4d65'
  }), localDb)

  assert.true(spy.calledOnce)
  assert.true(localDb.data.authors.size === 0)
  assert.falsy(res)
})

describe('Deve obter um autor existente', async (assert) => {
  const localDb = new db(null, initialData)
  const spy = sinon.spy(localDb, 'getAuthor')
  const authorId = '75abf34d45f25ade860e3a8577d4529dab1b3658028ef82584b5ba1a393a4d65'

  const res = await authorsImpl.GetAuthor(request({ authorId }), localDb)
  assert.true(spy.calledOnce)
  assert.true(spy.calledWith(authorId))
  assert.truthy(res.authors)
  assert.is(res.authors.id, authorId)

})

describe('Deve dar erro ao obter um autor inexistente', async (assert) => {
  const localDb = new db(null, initialData)
  const spy = sinon.spy(localDb, 'getAuthor')
  const authorId = 'não existente'

  const err = await assert.throwsAsync(authorsImpl.GetAuthor(request({ authorId }), localDb))
  assert.true(spy.calledOnce)
  assert.true(spy.calledWith(authorId))
  assert.truthy(err)
  assert.is(err.message, 'Author não existente not found')
})

describe('Deve dar erro ao atualizar um autor inexistente', async (assert) => {
  const localDb = new db(null, initialData)
  const spy = sinon.spy(localDb, 'updateAuthor')
  sinon.stub(localDb, 'save').returns()
  sinon.stub(localDb, 'load').returns()

  const err = await assert.throwsAsync(
    authorsImpl.UpdateAuthor(request(
      {
        authorId: 'não existente',
        data: { name: 'teste' }
      })
      , localDb)
  )

  assert.false(spy.calledOnce)
  assert.truthy(err)
  assert.truthy(err, 'Author não existente not found')
})

describe('Deve atualizar um autor existente', async (assert) => {
  const localDb = new db(null, initialData)
  const spy = sinon.spy(localDb, 'updateAuthor')
  sinon.stub(localDb, 'save').returns()
  sinon.stub(localDb, 'load').returns()
  const authorId = '75abf34d45f25ade860e3a8577d4529dab1b3658028ef82584b5ba1a393a4d65'

  const res = await authorsImpl.UpdateAuthor(request({
    authorId,
    data: { name: 'teste' }
  }), localDb)

  assert.true(spy.calledOnce)
  assert.truthy(res.authors)
  assert.is(res.authors.name, 'teste')
  assert.is(res.authors.id, authorId)
})

describe('Não deve adicionar um autor existente', async (assert) => {
  const localDb = new db(null, initialData)
  const spy = sinon.spy(localDb, 'addAuthor')
  sinon.stub(localDb, 'save').returns()
  sinon.stub(localDb, 'load').returns()
  const author = {
    name: 'Isaac Asimov'
  }

  const err = await assert.throwsAsync(authorsImpl.CreateAuthor(request({ author }), localDb))
  assert.true(spy.calledOnce)
  assert.truthy(err)
  assert.regex(err.message, /already exists/)
})

describe('Deve adicionar um novo autor', async (assert) => {
  const localDb = new db(null, initialData)
  const spy = sinon.spy(localDb, 'addAuthor')
  sinon.stub(localDb, 'save').returns()
  sinon.stub(localDb, 'load').returns()
  const author = {
    name: 'Teste'
  }

  const res = await authorsImpl.CreateAuthor(request({
    author
  }), localDb)

  assert.true(spy.calledOnce)
  assert.truthy(res)
  assert.is(res.authors.name, author.name)
  assert.true(localDb.data.authors.size === 2)
})
