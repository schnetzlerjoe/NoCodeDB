const express = require('express');
const swaggerUi = require('swagger-ui-express'),
  swaggerDocument = require('./swagger.json');
const table = require("./endpoints/table/get");
const signup = require("./endpoints/user/signup");
const login = require("./endpoints/user/login");
const logout = require("./endpoints/user/logout");
const refresh = require("./endpoints/user/refresh");
const tablePost = require("./endpoints/table/post");
const columnPost = require("./endpoints/col/post");
const rowPost = require("./endpoints/row/post");
const jwt_verify = require("./helpers/jwtverify");
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Table Endpoint //
//For table actions

app.get('/:table', jwt_verify.authenticateToken, async (req, res, next) => {

  try {

    table.get(req, res, next)
  
  } catch (err) {

    console.log(err)

    res.status(500).json(err)

  }

})

app.post('/table', jwt_verify.authenticateToken, async (req, res, next) => {

  try {

    tablePost.post(req, res, next).then((data) => {
      res.status(201).json({"message": "Table Successfully Added"})
    })
  
  } catch (err) {

    console.log(err)
    res.status(500).json(err)

  }

})

app.delete('/:table', jwt_verify.authenticateToken, async (req, res, next) => {

  try {

    deletes.delete(req, res, next)
  
  } catch (err) {

    res.status(500).json("Internal Server Error")

  }

})

app.put('/:table', jwt_verify.authenticateToken, async (req, res, next) => {

  try {

    puts.put(req, res, next)
  
  } catch (err) {

    res.status(500).json("Internal Server Error")

  }

})

// Column Endpoint //
//For column actions

app.get('/:table/:column', jwt_verify.authenticateToken, async (req, res, next) => {

  try {

    gets.get(req, res, next)
  
  } catch (err) {

    console.log(err)

    res.status(500).json(err)

  }

})

app.post('/:table/column', jwt_verify.authenticateToken, async (req, res, next) => {


  try {

    columnPost.post(req, res, next).then((data) => {
      res.status(201).json({"message": "Column Successfully Added"})
    })
  
  } catch (err) {

    console.log(err)
    res.status(500).json(err)

  }

})

app.delete('/:table/:column', jwt_verify.authenticateToken, async (req, res, next) => {

  try {

    deletes.delete(req, res, next)
  
  } catch (err) {

    res.status(500).json("Internal Server Error")

  }

})

app.put('/:table/:column', jwt_verify.authenticateToken, async (req, res, next) => {

  try {

    puts.put(req, res, next)
  
  } catch (err) {

    res.status(500).json("Internal Server Error")

  }

})

// Row Endpoint //
//For row actions

app.get('/:table/:row', jwt_verify.authenticateToken, async (req, res, next) => {

  try {

    gets.get(req, res, next)
  
  } catch (err) {

    console.log(err)

    res.status(500).json(err)

  }

})

app.post('/:table/row', jwt_verify.authenticateToken, async (req, res, next) => {

  try {

    rowPost.post(req, res, next)
  
  } catch (err) {

    res.status(500).json("Internal Server Error")

  }

})

app.delete('/:table/:row', jwt_verify.authenticateToken, async (req, res, next) => {

  try {

    deletes.delete(req, res, next)
  
  } catch (err) {

    res.status(500).json("Internal Server Error")

  }

})

app.put('/:table/:row', jwt_verify.authenticateToken, async (req, res, next) => {

  try {

    puts.put(req, res, next)
  
  } catch (err) {

    res.status(500).json("Internal Server Error")

  }

})

// User Endpoint //
//For user actions

app.post('/signup', async (req, res, next) => {

  try {

    signup.signup(req, res, next)
  
  } catch (err) {

    console.log(err)

    res.status(500).json("Internal Server Error")

  }

})

app.post('/login', async (req, res, next) => {

  try {

    login.login(req, res, next)
  
  } catch (err) {

    console.log(err)

    res.status(500).json("Internal Server Error")

  }

})

app.post('/token', async (req, res, next) => {

  try {

    refresh.refreshCheck(req, res, next)
  
  } catch (err) {

    res.status(500).json("Internal Server Error")

  }

})

app.post('/logout', jwt_verify.authenticateToken, async (req, res, next) => {

  try {

    logout.logout(req, res, next)
  
  } catch (err) {

    res.status(500).json("Internal Server Error")

  }

})

/////////////////////

app.listen(port, () => {
  console.log(`NoCodeDB is running on port ${port}`)
})