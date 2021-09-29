module.exports.getCol = async (colName) => {
  new Promise((resolve, reject) => {
    try {
      var query = {colName: colName}
      const res = await mgdb.findDoc("metadata", "columns", query)
      resolve(res)
    } catch (err) {
      console.log(err)
      resolve(err)
    }
  })
}