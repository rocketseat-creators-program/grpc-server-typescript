const describe = require('ava')
const sinon = require('sinon')
const booksImpl = require('../src/handlers/bookstore')
const db = require('../src/db')
const request = (data) => ({ request: data })

const initialData = {
  books: [["634c585102e1dc2959ec63154ce895a6b00a540b168b270d016daaddbdf812bf", { "title": "Eu, Robô", "author": "75abf34d45f25ade860e3a8577d4529dab1b3658028ef82584b5ba1a393a4d65", "imageUrl": "https://skoob.s3.amazonaws.com/livros/241/EU_ROBO_1228412917B.jpg", "pages": 320, "id": "634c585102e1dc2959ec63154ce895a6b00a540b168b270d016daaddbdf812bf" }]],
  authors: [["75abf34d45f25ade860e3a8577d4529dab1b3658028ef82584b5ba1a393a4d65", { "name": "Isaac Asimov", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Isaac.Asimov01.jpg/440px-Isaac.Asimov01.jpg", "description": "Isaac Asimov was an American writer and professor of biochemistry at Boston University. He was known for his works of science fiction and popular science. Asimov was a prolific writer, and wrote or edited more than 500 books. He also wrote an estimated 90,000 letters and postcards", "id": "75abf34d45f25ade860e3a8577d4529dab1b3658028ef82584b5ba1a393a4d65" }]]
}

const globalDb = new db(null, initialData)
const sandbox = sinon.createSandbox()

describe('Deve listar os livros', assert => {
  const dbSpy = sandbox.spy(globalDb)
  const impl = booksImpl(dbSpy)
  impl.ListBook({}, (err, res) => {
    assert.true(dbSpy.listBooks.calledOnce)
    assert.true(res.books.length === 1)
    assert.falsy(err)
  })
  sandbox.restore()
})

describe('Deve dar erro ao remover livros não existentes', assert => {
  const spy = sandbox.spy(globalDb, 'deleteBook')
  sandbox.stub(globalDb, 'save').returns()
  sandbox.stub(globalDb, 'load').returns()

  const impl = booksImpl(globalDb)
  impl.DeleteBook(request({
    bookId: 'não existente'
  }), (err, _) => {
    assert.false(spy.calledOnce)
    assert.truthy(err)
    assert.is(err.message, 'Book não existente not found')
    assert.true(globalDb.data.books.size === 1)
  })
  sandbox.restore()
})

describe('Deve remover um livro existente', assert => {
  const localDb = new db(null, initialData)
  const spy = sinon.spy(localDb, 'deleteBook')
  sinon.stub(localDb, 'save').returns()
  sinon.stub(localDb, 'load').returns()

  const impl = booksImpl(localDb)
  impl.DeleteBook(request({
    bookId: '634c585102e1dc2959ec63154ce895a6b00a540b168b270d016daaddbdf812bf'
  }), (err, res) => {
    assert.true(spy.calledOnce)
    assert.falsy(err)
    assert.true(localDb.data.books.size === 0)
    assert.deepEqual(res, {})
  })
})

describe('Deve obter um livro existente', assert => {
  const dbSpy = sandbox.spy(globalDb)
  const impl = booksImpl(dbSpy)
  const bookId = '634c585102e1dc2959ec63154ce895a6b00a540b168b270d016daaddbdf812bf'

  impl.GetBook(request({ bookId }), (err, res) => {
    assert.true(dbSpy.getBook.calledOnce)
    assert.true(dbSpy.getBook.calledWith(bookId))
    assert.truthy(res.books)
    assert.is(res.books.id, bookId)
    assert.falsy(err)
  })

  sandbox.restore()
})

describe('Deve dar erro ao obter um livro inexistente', assert => {
  const dbSpy = sandbox.spy(globalDb)
  const impl = booksImpl(dbSpy)
  const bookId = 'não existente'

  impl.GetBook(request({ bookId }), (err, res) => {
    assert.true(dbSpy.getBook.calledOnce)
    assert.true(dbSpy.getBook.calledWith(bookId))
    assert.falsy(res)
    assert.truthy(err)
    assert.is(err.message, 'Book não existente not found')
  })

  sandbox.restore()
})

describe('Deve dar erro ao atualizar um livro inexistente', assert => {
  const localDb = new db(null, initialData)
  const spy = sinon.spy(localDb, 'updateBook')
  sinon.stub(localDb, 'save').returns()
  sinon.stub(localDb, 'load').returns()

  const impl = booksImpl(localDb)
  impl.UpdateBook(request({
    bookId: 'não existente',
    data: { title: 'teste' }
  }), (err, res) => {
    assert.false(spy.calledOnce)
    assert.truthy(err)
    assert.deepEqual(res, null)
    assert.truthy(err, 'Book não existente not found')
  })
})

describe('Deve atualizar um livro existente', assert => {
  const localDb = new db(null, initialData)
  const spy = sinon.spy(localDb, 'updateBook')
  sinon.stub(localDb, 'save').returns()
  sinon.stub(localDb, 'load').returns()
  const bookId = '634c585102e1dc2959ec63154ce895a6b00a540b168b270d016daaddbdf812bf'

  const impl = booksImpl(localDb)
  impl.UpdateBook(request({
    bookId,
    data: { title: 'teste' }
  }), (err, res) => {
    assert.true(spy.calledOnce)
    assert.falsy(err)
    assert.truthy(res.books)
    assert.is(res.books.title, 'teste')
    assert.is(res.books.id, bookId)
  })
})

describe('Não deve adicionar um livro existente', assert => {
  const localDb = new db(null, initialData)
  const spy = sinon.spy(localDb, 'addBook')
  sinon.stub(localDb, 'save').returns()
  sinon.stub(localDb, 'load').returns()
  const book = {
    title: 'Eu, Robô',
    author: '75abf34d45f25ade860e3a8577d4529dab1b3658028ef82584b5ba1a393a4d65'
  }

  const impl = booksImpl(localDb)
  impl.CreateBook(request({
    book
  }), (err, res) => {
    assert.true(spy.calledOnce)
    assert.truthy(err)
    assert.regex(err.message, /already exists/)
    assert.falsy(res)
  })
})

describe('Não deve adicionar um livro de um autor inexistente', assert => {
  const localDb = new db(null, initialData)
  const spy = sinon.spy(localDb, 'addBook')
  sinon.stub(localDb, 'save').returns()
  sinon.stub(localDb, 'load').returns()
  const book = {
    title: 'Eu, Robô',
    author: 'não existente'
  }

  const impl = booksImpl(localDb)
  impl.CreateBook(request({
    book
  }), (err, res) => {
    assert.true(spy.calledOnce)
    assert.truthy(err)
    assert.is(err.message, `Author "${book.author}" not found`)
    assert.falsy(res)
  })
})

describe('Deve adicionar um novo livro', assert => {
  const localDb = new db(null, initialData)
  const spy = sinon.spy(localDb, 'addBook')
  sinon.stub(localDb, 'save').returns()
  sinon.stub(localDb, 'load').returns()
  const book = {
    title: 'Teste',
    author: '75abf34d45f25ade860e3a8577d4529dab1b3658028ef82584b5ba1a393a4d65'
  }

  const impl = booksImpl(localDb)
  impl.CreateBook(request({
    book
  }), (err, res) => {
    assert.true(spy.calledOnce)
    assert.falsy(err)
    assert.truthy(res)
    assert.is(res.books.title, book.title)
    assert.true(localDb.data.books.size === 2)
  })
})


