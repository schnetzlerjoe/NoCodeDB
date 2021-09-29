module.exports.datatype_map = {
  "string": (value) => { return String(value) },
  "number": (value) => { return Number(value) },
  "null": (value) => { return null }
}