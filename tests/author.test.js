const describe = require('ava')
const sinon = require('sinon')
const authorsImpl = require('../src/handlers/author')
const db = require('../src/db')
const request = (data) => ({ request: data })

const initialData = {
  books: [],
  authors: [["75abf34d45f25ade860e3a8577d4529dab1b3658028ef82584b5ba1a393a4d65", { "name": "Isaac Asimov", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Isaac.Asimov01.jpg/440px-Isaac.Asimov01.jpg", "description": "Isaac Asimov was an American writer and professor of biochemistry at Boston University. He was known for his works of science fiction and popular science. Asimov was a prolific writer, and wrote or edited more than 500 books. He also wrote an estimated 90,000 letters and postcards", "id": "75abf34d45f25ade860e3a8577d4529dab1b3658028ef82584b5ba1a393a4d65" }]]
}

const globalDb = new db(null, initialData)
const sandbox = sinon.createSandbox()

describe('Deve listar os autores', assert => {
  const dbSpy = sandbox.spy(globalDb)
  const impl = authorsImpl(dbSpy)
  impl.ListAuthor({}, (err, res) => {
    assert.true(dbSpy.listAuthors.calledOnce)
    assert.true(res.authors.length === 1)
    assert.falsy(err)
  })
  sandbox.restore()
})

describe('Deve dar erro ao remover autores não existentes', assert => {
  const spy = sandbox.spy(globalDb, 'deleteAuthor')
  sandbox.stub(globalDb, 'save').returns()
  sandbox.stub(globalDb, 'load').returns()

  const impl = authorsImpl(globalDb)
  impl.DeleteAuthor(request({
    authorId: 'não existente'
  }), (err, _) => {
    assert.false(spy.calledOnce)
    assert.truthy(err)
    assert.is(err.message, 'Author não existente not found')
    assert.true(globalDb.data.authors.size === 1)
  })
  sandbox.restore()
})

describe('Deve remover um autor existente', assert => {
  const localDb = new db(null, initialData)
  const spy = sinon.spy(localDb, 'deleteAuthor')
  sinon.stub(localDb, 'save').returns()
  sinon.stub(localDb, 'load').returns()

  const impl = authorsImpl(localDb)
  impl.DeleteAuthor(request({
    authorId: '75abf34d45f25ade860e3a8577d4529dab1b3658028ef82584b5ba1a393a4d65'
  }), (err, res) => {
    assert.true(spy.calledOnce)
    assert.falsy(err)
    assert.true(localDb.data.authors.size === 0)
    assert.deepEqual(res, {})
  })
})

describe('Deve obter um autor existente', assert => {
  const dbSpy = sandbox.spy(globalDb)
  const impl = authorsImpl(dbSpy)
  const authorId = '75abf34d45f25ade860e3a8577d4529dab1b3658028ef82584b5ba1a393a4d65'

  impl.GetAuthor(request({ authorId }), (err, res) => {
    assert.true(dbSpy.getAuthor.calledOnce)
    assert.true(dbSpy.getAuthor.calledWith(authorId))
    assert.truthy(res.authors)
    assert.is(res.authors.id, authorId)
    assert.falsy(err)
  })

  sandbox.restore()
})

describe('Deve dar erro ao obter um autor inexistente', assert => {
  const dbSpy = sandbox.spy(globalDb)
  const impl = authorsImpl(dbSpy)
  const authorId = 'não existente'

  impl.GetAuthor(request({ authorId }), (err, res) => {
    assert.true(dbSpy.getAuthor.calledOnce)
    assert.true(dbSpy.getAuthor.calledWith(authorId))
    assert.falsy(res)
    assert.truthy(err)
    assert.is(err.message, 'Author não existente not found')
  })

  sandbox.restore()
})

describe('Deve dar erro ao atualizar um autor inexistente', assert => {
  const localDb = new db(null, initialData)
  const spy = sinon.spy(localDb, 'updateAuthor')
  sinon.stub(localDb, 'save').returns()
  sinon.stub(localDb, 'load').returns()

  const impl = authorsImpl(localDb)
  impl.UpdateAuthor(request({
    authorId: 'não existente',
    data: { name: 'teste' }
  }), (err, res) => {
    assert.false(spy.calledOnce)
    assert.truthy(err)
    assert.deepEqual(res, null)
    assert.truthy(err, 'Author não existente not found')
  })
})

describe('Deve atualizar um autor existente', assert => {
  const localDb = new db(null, initialData)
  const spy = sinon.spy(localDb, 'updateAuthor')
  sinon.stub(localDb, 'save').returns()
  sinon.stub(localDb, 'load').returns()
  const authorId = '75abf34d45f25ade860e3a8577d4529dab1b3658028ef82584b5ba1a393a4d65'

  const impl = authorsImpl(localDb)
  impl.UpdateAuthor(request({
    authorId,
    data: { name: 'teste' }
  }), (err, res) => {
    assert.true(spy.calledOnce)
    assert.falsy(err)
    assert.truthy(res.authors)
    assert.is(res.authors.name, 'teste')
    assert.is(res.authors.id, authorId)
  })
})

describe('Não deve adicionar um autor existente', assert => {
  const localDb = new db(null, initialData)
  const spy = sinon.spy(localDb, 'addAuthor')
  sinon.stub(localDb, 'save').returns()
  sinon.stub(localDb, 'load').returns()
  const author = {
    name: 'Isaac Asimov'
  }

  const impl = authorsImpl(localDb)
  impl.CreateAuthor(request({
    author
  }), (err, res) => {
    assert.true(spy.calledOnce)
    assert.truthy(err)
    assert.regex(err.message, /already exists/)
    assert.falsy(res)
  })
})

describe('Deve adicionar um novo autor', assert => {
  const localDb = new db(null, initialData)
  const spy = sinon.spy(localDb, 'addAuthor')
  sinon.stub(localDb, 'save').returns()
  sinon.stub(localDb, 'load').returns()
  const author = {
    name: 'Teste'
  }

  const impl = authorsImpl(localDb)
  impl.CreateAuthor(request({
    author
  }), (err, res) => {
    assert.true(spy.calledOnce)
    assert.falsy(err)
    assert.truthy(res)
    assert.is(res.authors.name, author.name)
    assert.true(localDb.data.authors.size === 2)
  })
})


