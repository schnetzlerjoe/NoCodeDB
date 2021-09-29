const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require('uuid');
const jwt = require("jsonwebtoken");
const mongodb = require("./../../helpers/mongodb");

module.exports.logout = async (req, res, next) => {
  try {
    const user = await mongodb.findDoc("auth", "User", {uid: req.user.uid});
    await mongodb.updateDoc("auth", "User", {uid: user.uid}, {"refreshToken": null});
    res.clearCookie("ncdb-access-token");
    res.clearCookie("ncdb-refresh-token");
    return res.json({"success": true, "message": "Logout successful", "data": null})
  } catch (err) {
    console.log(err)
    res.status(401).json({"message": err.message})
  }
}