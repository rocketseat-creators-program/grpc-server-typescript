function inject (object, database) {
  const implementationObject = {}
  for (const fn of Object.keys(object)) {
    implementationObject[fn] = (call, callback) => object[fn](call, database).then((data) => callback(null, data)).catch((err) => callback(err))
  }
  return implementationObject
}

module.exports = inject
