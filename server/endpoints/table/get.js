const mgdb = require('./../../helpers/mongodb.js');

module.exports.get = async (req, res, next) => {
  new Promise(async (resolve, reject) => {
    try {
      query = req.query.query
      const res = await mgdb.findDocs("data", req.params.table, query = {}, projection = {}, sort = {}, limit = null)
      resolve(res)
    } catch (err) {
      console.log(err)
      resolve(err)
    }
  })
}