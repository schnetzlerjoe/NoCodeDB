const mgdb = require('./../../helpers/mongodb.js');
const types = require('./../../helpers/datatypes.js');
const _ = require('lodash');

function checkPermissionsTable(table, user) {
  if(table['require_auth']) {
    if(!user || typeof(user) == "undefined" || user == null) { throw new Error(table['tableName'] + " requires authentication for write access") }
  }
}
function checkWildcardsTable(table, body, table_cols) {
  if(table['allow_wildcards'] == false) {
    var setCols = []
    table_cols.forEach((col) => setCols.push(col["columnName"]))
    console.log(setCols)
    _.keysIn(body).forEach((objName) => {
        if(setCols.includes(objName) == false) {
         throw new Error("Wildcards are not allowed for this table. Found a wildcard named "+ objName + ". Retry without wildcards or turn on wildcards for this table")
        }
    })
  }
}
function checkRequiredCol(body, table_cols) {
  table_cols.forEach((col) => {
    if(col['required']) {
      if(typeof(body[col['columnName']]) == "undefined") { throw new Error(col['columnName'] + " was not found and is a required column") }
    }
  })
}
function checkPermissionsCol(table_cols, user) {
  table_cols.forEach((col) => {
    if(col['require_auth']) {
      if(!user || typeof(user) == "undefined" || user == null) { throw new Error(col['columnName'] + " requires authentication for write access") }
    }
  })
}

function checkAll(table, body, table_cols , user) {
  checkPermissionsTable(table, user)
  checkPermissionsCol(table_cols, user)
  checkRequiredCol(body, table_cols)
  checkWildcardsTable(table, body, table_cols)
}

module.exports.post = async (req, res, next) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Check if table does not exists
      const table = await mgdb.findDoc("metadata", "tables", {"tableName": req.params.table})
      // If table doesn't exist throw an error
      if(table == null) { throw new Error("Table Does Not Exist") }
      const body = req.body
      // Query table columns specified
      const table_cols = await mgdb.findDocs("metadata", "columns", {"table": table})
      // Check all rules and create error if rule is not followed
      checkAll(table, body, table_cols , req.user)
      // Create new row/document
      await mgdb.createDoc("data", req.params.table, body)
      resolve(res)
    } catch (err) {
      console.log(err)
      res.status(400).json({"message": err.message})
    }
  })
}