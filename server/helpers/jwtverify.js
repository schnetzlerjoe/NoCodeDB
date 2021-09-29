const jwt = require('jsonwebtoken');

module.exports.authenticateToken = (req, res, next) => {
  try {
    const token = req.cookies["ncdb-access-token"];
    if (token == null) { throw new Error("Authorization Failed") }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, { algorithms: ['HS256'], issuer: 'nocodedb' }, (err, user) => {
      if (err) { throw new Error(err) }
      req.user = user
      next()
    })
  } catch (err) {
    console.log(err)
    res.status(401).json({"message": err.message})
  }
}