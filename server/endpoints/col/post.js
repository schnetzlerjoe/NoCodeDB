const mgdb = require('./../../helpers/mongodb.js');

module.exports.post = async (req, res, next) => {
  return new Promise(async (resolve, reject) => {
    try {
      query = req.query.query
      // Check if table does not exists
      const table_check = await mgdb.findDoc("metadata", "tables", {"tableName": req.params.table})
      if(table_check == null) { throw new Error("Table Does Not Exists") }
      // Check if column already exists
      const col_check = await mgdb.findDoc("metadata", "columns", {"columnName": req.body.name})
      if(col_check != null) { throw new Error("Column Already Exists") }
      // Run add column and update metadata
      await mgdb.createDoc("metadata", "columns", { "table": req.params.table, "columnName": req.body.name, "datatype": req.body.datatype, "require_auth": true, "user_only_data": false, "required": true})
      resolve(res)
    } catch (err) {
      console.log(err)
      res.status(400).json({"message": err.message})
    }
  })
}