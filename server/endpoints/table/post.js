const mgdb = require('./../../helpers/mongodb.js');

module.exports.post = async (req, res, next) => {
  return new Promise(async (resolve, reject) => {
    try {
      query = req.query.query
      const check = await mgdb.findDoc("metadata", "tables", {"tableName": req.body.name})
      if(check != null) { throw new Error("Table Already Exists") }
      await mgdb.createDoc("metadata", "tables", { "tableName": req.body.name, "columns": [], "allow_wildcards": false , "require_auth": true, "user_only_data": false})
      const res = await mgdb.createCollection("data", req.body.name)
      resolve(res)
    } catch (err) {
      console.log(err)
      res.status(400).json({"message": err.message})
    }
  })
}