const { MongoClient } = require("mongodb");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require('uuid');
const jwt = require("jsonwebtoken");
const mongodb = require("./../../helpers/mongodb");

let cookie_options = {
    maxAge: 1000 * 60 * 60* 24 * 90,
    httpOnly: true,
    secure: true
}

function generateAccessToken(jwtdata) {
  return jwt.sign(jwtdata, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
}

module.exports.login = async (req, res, next) => {
  try {
    const user = await mongodb.findDoc("auth", "User", {email: req.body.email});
    if(!user) {
      throw new Error("Incorrect login credentials")
    }
    bcrypt.compare(req.body.password, user.hash, async function(err, result) {
      if(result == false) {
        throw new Error("Incorrect login credentials")
      }
      if(result == true) {
        const jwtdata = {uid: user.uid, iat: Math.floor(Date.now() / 1000), iss: "nocodedb"};
        const accessToken = await generateAccessToken(jwtdata);
        const refreshToken = await jwt.sign(jwtdata, process.env.REFRESH_TOKEN_SECRET);
        await mongodb.updateDoc("auth", "User", {uid: user.uid}, {"refreshToken": refreshToken});
        res.cookie('ncdb-access-token', accessToken, cookie_options);
        res.cookie('ncdb-refresh-token', refreshToken, cookie_options);
        return res.json({"success": true, "message": "Login successful", "data": null})
      }
    });
  } catch (err) {
    console.log(err)

    res.status(401).json({"message": err.message})
  }
}