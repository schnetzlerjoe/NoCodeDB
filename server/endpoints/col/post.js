const mgdb = require('./../../helpers/mongodb.js');

module.exports.post = async (req, res, next) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Check if table does not exists
      const table_check = await mgdb.findDoc("metadata", "tables", {"tableName": req.params.table})
      if(table_check == null) { throw new Error("Table Does Not Exist...") }
      // Check if column already exists
      const col_check = await mgdb.findDoc("metadata", "columns", {"columnName": req.body.name})
      if(col_check != null) { throw new Error("Column Already Exists") }
      // Run add column and update metadata
      console.log(req.body)
      await mgdb.createDoc("metadata", "columns", { "table": req.params.table, "columnName": req.body.name, "datatype": req.body.datatype, "require_auth": true, "user_only_data": false, "required": true})
      ret = {
        "success": true,
        "successCode": 201,
        "message": "Column Successfully Added"
      }
      res.status(201).json(ret)
      resolve(ret)
    } catch (err) {
      console.log(err)
      ret = {
        "success": false,
        "successCode": 500,
        "message": err.message
      }
      res.status(500).json(ret)
      resolve(ret)
    }
  })
}