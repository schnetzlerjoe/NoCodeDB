const mgdb = require('./../../helpers/mongodb.js');
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');

let cookie_options = {
    maxAge: 1000 * 60 * 60* 24 * 90,
    httpOnly: true,
    secure: true
}

function generateAccessToken(jwtdata) {
  return jwt.sign(jwtdata, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
}

module.exports.signup = async (req, res, next) => {
  try {
    if(req.body.password != req.body.confirm_password) {
      throw new Error("Passwords do not match")
    }
    const uid = await uuidv4()
    const jwtdata = {uid: uid, iat: Math.floor(Date.now() / 1000), iss: "nocodedb"};
    const accessToken = await generateAccessToken(jwtdata);
    const refreshToken = await jwt.sign(jwtdata, process.env.REFRESH_TOKEN_SECRET);
    bcrypt.hash(req.body.password, 15, async function(err, hash) {
      await mgdb.createDoc("auth", "User", {
        email: req.body.email,
        hash: hash,
        refreshToken: refreshToken,
        uid: uid
      })
    });
    res.cookie('ncdb-access-token', accessToken, cookie_options);
    res.cookie('ncdb-refresh-token', refreshToken, cookie_options);
    return res.json({"success": true, "message": "Signup successful", "data": null})
  } catch (err) {
    console.log(err)
    res.status(401).json({"message": err.message})
  }
}