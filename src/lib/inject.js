function inject (fn, database) {
  return (call, callback) => fn(call, callback, database)
}

module.exports = inject
