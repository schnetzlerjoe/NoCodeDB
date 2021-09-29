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

module.exports.refreshCheck = async (req, res, next) => {
  try {
    var refreshToken = req.cookies["ncdb-refresh-token"];
    if (!refreshToken || refreshToken == null) { throw new Error("No Refresh Token Provided") };
    const user = await mongodb.findDoc("auth", "User", {refreshToken: refreshToken});
    if (!user) { throw new Error("Invalid Refresh Token") };
    const jwtdata = {uid: user.uid, iat: Math.floor(Date.now() / 1000), iss: "nocodedb"};
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, { algorithms: ['HS256'], issuer: 'nocodedb' }, async (err, user) => {
      if (err) { throw new Error("No Refresh Token Provided") };
      const accessToken = await generateAccessToken(jwtdata);
      refreshToken = await jwt.sign(jwtdata, process.env.REFRESH_TOKEN_SECRET);
      await mongodb.updateDoc("auth", "User", {uid: user.uid}, {"refreshToken": refreshToken});
      res.cookie('ncdb-access-token', accessToken, cookie_options);
      res.cookie('ncdb-refresh-token', refreshToken, cookie_options);
      return res.json({"success": true, "message": "Refresh successful", "data": null})
    });
  } catch (err) {
    console.log(err)

    return res.status(403).json({"message": err.message})
  }
}