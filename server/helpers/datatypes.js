module.exports.types = {
  "number": (value) => { return Number(value) },
  "string": (value) => { return String(value) },
  "date": (value) => { return Date(value) },
  "boolean": (value) => { return Boolean(value) },
  "reference": (value) => { return String(value) }
}