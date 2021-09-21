const describe = require('ava')
const sinon = require('sinon')
const booksImpl = require('../src/handlers/bookstore')
const db = require('../src/db')
const request = (data) => ({ request: data })

const initialData = {
  books: [["634c585102e1dc2959ec63154ce895a6b00a540b168b270d016daaddbdf812bf", { "title": "Eu, Robô", "author": "75abf34d45f25ade860e3a8577d4529dab1b3658028ef82584b5ba1a393a4d65", "imageUrl": "https://skoob.s3.amazonaws.com/livros/241/EU_ROBO_1228412917B.jpg", "pages": 320, "id": "634c585102e1dc2959ec63154ce895a6b00a540b168b270d016daaddbdf812bf" }]],
  authors: [["75abf34d45f25ade860e3a8577d4529dab1b3658028ef82584b5ba1a393a4d65", { "name": "Isaac Asimov", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Isaac.Asimov01.jpg/440px-Isaac.Asimov01.jpg", "description": "Isaac Asimov was an American writer and professor of biochemistry at Boston University. He was known for his works of science fiction and popular science. Asimov was a prolific writer, and wrote or edited more than 500 books. He also wrote an estimated 90,000 letters and postcards", "id": "75abf34d45f25ade860e3a8577d4529dab1b3658028ef82584b5ba1a393a4d65" }]]
}

describe('Deve listar os livros', async (assert) => {
  const localDb = new db(null, initialData)
  const spy = sinon.spy(localDb, 'listBooks')
  const res = await booksImpl.ListBook({}, localDb)
  assert.true(spy.calledOnce)
  assert.true(res.books.length === 1)
})

describe('Deve dar erro ao remover livros não existentes', async (assert) => {
  const localDb = new db(null, initialData)
  const spy = sinon.spy(localDb, 'deleteBook')
  sinon.stub(localDb, 'save').returns()
  sinon.stub(localDb, 'load').returns()

  const err = await assert.throwsAsync(booksImpl.DeleteBook(request({
    bookId: 'não existente'
  }), localDb))

  assert.false(spy.calledOnce)
  assert.truthy(err)
  assert.is(err.message, 'Book não existente not found')
  assert.true(localDb.data.books.size === 1)
})

describe('Deve remover um livro existente', async (assert) => {
  const localDb = new db(null, initialData)
  const spy = sinon.spy(localDb, 'deleteBook')
  sinon.stub(localDb, 'save').returns()
  sinon.stub(localDb, 'load').returns()

  const res = await booksImpl.DeleteBook(request({
    bookId: '634c585102e1dc2959ec63154ce895a6b00a540b168b270d016daaddbdf812bf'
  }), localDb)
  assert.true(spy.calledOnce)
  assert.true(localDb.data.books.size === 0)
  assert.falsy(res)
})

describe('Deve obter um livro existente', async (assert) => {
  const localDb = new db(null, initialData)
  const spy = sinon.spy(localDb, 'getBook')
  const bookId = '634c585102e1dc2959ec63154ce895a6b00a540b168b270d016daaddbdf812bf'

  const res = await booksImpl.GetBook(request({ bookId }), localDb)
  assert.true(spy.calledOnce)
  assert.true(spy.calledWith(bookId))
  assert.truthy(res.books)
  assert.is(res.books.id, bookId)
})

describe('Deve dar erro ao obter um livro inexistente', async (assert) => {
  const localDb = new db(null, initialData)
  const spy = sinon.spy(localDb, 'getBook')
  const bookId = 'não existente'

  const err = await assert.throwsAsync(booksImpl.GetBook(request({ bookId }), localDb))
  assert.true(spy.calledOnce)
  assert.true(spy.calledWith(bookId))
  assert.truthy(err)
  assert.is(err.message, 'Book não existente not found')
})

describe('Deve dar erro ao atualizar um livro inexistente', async (assert) => {
  const localDb = new db(null, initialData)
  const spy = sinon.spy(localDb, 'updateBook')
  sinon.stub(localDb, 'save').returns()
  sinon.stub(localDb, 'load').returns()

  const err = await assert.throwsAsync(booksImpl.UpdateBook(request({
    bookId: 'não existente',
    data: { title: 'teste' }
  }), localDb))

  assert.false(spy.calledOnce)
  assert.truthy(err)
  assert.truthy(err, 'Book não existente not found')
})

describe('Deve atualizar um livro existente', async (assert) => {
  const localDb = new db(null, initialData)
  const spy = sinon.spy(localDb, 'updateBook')
  sinon.stub(localDb, 'save').returns()
  sinon.stub(localDb, 'load').returns()
  const bookId = '634c585102e1dc2959ec63154ce895a6b00a540b168b270d016daaddbdf812bf'

  const res = await booksImpl.UpdateBook(request({
    bookId,
    data: { title: 'teste' }
  }), localDb)
  assert.true(spy.calledOnce)
  assert.truthy(res.books)
  assert.is(res.books.title, 'teste')
  assert.is(res.books.id, bookId)
})

describe('Não deve adicionar um livro existente', async (assert) => {
  const localDb = new db(null, initialData)
  const spy = sinon.spy(localDb, 'addBook')
  sinon.stub(localDb, 'save').returns()
  sinon.stub(localDb, 'load').returns()
  const book = {
    title: 'Eu, Robô',
    author: '75abf34d45f25ade860e3a8577d4529dab1b3658028ef82584b5ba1a393a4d65'
  }

  const err = await assert.throwsAsync(booksImpl.CreateBook(request({
    book
  }), localDb))
  assert.true(spy.calledOnce)
  assert.truthy(err)
  assert.regex(err.message, /already exists/)
})

describe('Não deve adicionar um livro de um autor inexistente', async (assert) => {
  const localDb = new db(null, initialData)
  const spy = sinon.spy(localDb, 'addBook')
  sinon.stub(localDb, 'save').returns()
  sinon.stub(localDb, 'load').returns()
  const book = {
    title: 'Eu, Robô',
    author: 'não existente'
  }

  const err = await assert.throwsAsync(booksImpl.CreateBook(request({
    book
  }), localDb))
  assert.true(spy.calledOnce)
  assert.truthy(err)
  assert.is(err.message, `Author "${book.author}" not found`)
})

describe('Deve adicionar um novo livro', async (assert) => {
  const localDb = new db(null, initialData)
  const spy = sinon.spy(localDb, 'addBook')
  sinon.stub(localDb, 'save').returns()
  sinon.stub(localDb, 'load').returns()
  const book = {
    title: 'Teste',
    author: '75abf34d45f25ade860e3a8577d4529dab1b3658028ef82584b5ba1a393a4d65'
  }

  const res = await booksImpl.CreateBook(request({ book }), localDb)

  assert.true(spy.calledOnce)
  assert.truthy(res)
  assert.is(res.books.title, book.title)
  assert.true(localDb.data.books.size === 2)
})


