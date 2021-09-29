const { MongoClient } = require("mongodb");

async function createDatabase(dbName) {
  try {
    const url =
      process.env.dbUrl + dbName + "?retryWrites=true&w=majority";

    MongoClient.connect(url, async function(err, db) {
      if (err) throw err;
      console.log("Database created!");
      await db.close();
      return "Database created!"
    });
  } catch (err) {
    console.log(err)
  }
}

async function createCollection(dbName, collectionName) {
  return new Promise((resolve, reject) => {
    try {
      const url =
        process.env.dbUrl + dbName + "?retryWrites=true&w=majority";

      MongoClient.connect(url, async function(err, db) {
        var dbo = await db.db(dbName);
        await dbo.createCollection(collectionName, async function(err, res) {
          if (err) throw err;
          await db.close();
          resolve(res);
        });
      });
    } catch (err) {
      console.log(err)
    }
  })
}

async function createDoc(dbName, collectionName, data) {
  return new Promise((resolve, reject) => {
    try {
      const url =
        process.env.dbUrl + dbName + "?retryWrites=true&w=majority";

      MongoClient.connect(url, async function(err, db) {
        if (err) throw err;
        var dbo = await db.db(dbName);
        await dbo.collection(collectionName).insertOne(data, async function(err, res) {
          if (err) throw err;
          await db.close();
          resolve(res);
        });
      });
    } catch (err) {
      console.log(err)
    }
  })
}

async function createDocs(dbName, collectionName, data) {
  return new Promise((resolve, reject) => {
    try {
      const url =
        process.env.dbUrl + dbName + "?retryWrites=true&w=majority";

      MongoClient.connect(url, async function(err, db) {
        if (err) throw err;
        var dbo = await db.db(dbName);
        await dbo.collection(collectionName).insertMany(data, async function(err, res) {
          if (err) throw err;
          await db.close();
          resolve(res);
        });
      });
    } catch (err) {
      console.log(err)
    }
  })
}

async function findDoc(dbName, collectionName, query = {}, projection = {}) {
  return new Promise((resolve, reject) => {
    try {
      const url =
        process.env.dbUrl + dbName + "?retryWrites=true&w=majority";

      MongoClient.connect(url, async function(err, db) {
        if (err) throw err;
        var dbo = await db.db(dbName);
        await dbo.collection(collectionName).findOne(query, { projection: projection }, async function(err, result) {
          if (err) throw err;
          await db.close();
          resolve(result);
        });
      });
    } catch (err) {
      console.log(err)
    }
  })
}

async function findDocs(dbName, collectionName, query = {}, projection = {}, sort = {}, limit = null) {
  return new Promise((resolve, reject) => {
    try {
      const url =
        process.env.dbUrl + dbName + "?retryWrites=true&w=majority";

      if(limit == null) {
        MongoClient.connect(url, async function(err, db) {
          if (err) throw err;
          var dbo = await db.db(dbName);
          await dbo.collection(collectionName).find(query, { projection: projection }).sort(sort).toArray(async function(err, result) {
            if (err) throw err;
            await db.close();
            resolve(result);
          });
        });
      } else {
        MongoClient.connect(url, async function(err, db) {
          if (err) throw err;
          var dbo = await db.db(dbName);
          await dbo.collection(collectionName).find(query, { projection: projection }).limit(limit).sort(sort).toArray(async function(err, result) {
            if (err) throw err;
            await db.close();
            resolve(result);
          });
        });
      };

    } catch (err) {
      console.log(err)
    }
  })
}

async function deleteDoc(dbName, collectionName, query = {}) {
  return new Promise((resolve, reject) => {
    try {
      const url =
        process.env.dbUrl + dbName + "?retryWrites=true&w=majority";

      MongoClient.connect(url, async function(err, db) {
        if (err) throw err;
        var dbo = await db.db(dbName);
        await dbo.collection(collectionName).deleteOne(query, async function(err, obj) {
          if (err) throw err;
          console.log(obj);
          await db.close();
          resolve(obj);
        });
      });
    } catch (err) {
      console.log(err)
    }
  })
}

async function deleteDocs(dbName, collectionName, query = {}) {
  return new Promise((resolve, reject) => {
    try {
      const url =
        process.env.dbUrl + dbName + "?retryWrites=true&w=majority";

      MongoClient.connect(url, async function(err, db) {
        if (err) throw err;
        var dbo = await db.db(dbName);
        await dbo.collection(collectionName).deleteMany(query, async function(err, obj) {
          if (err) throw err;
          console.log(obj);
          await db.close();
          resolve(obj);
        });
      });
    } catch (err) {
      console.log(err)
    }
  })
}

async function deleteCollection(dbName, collectionName, query = {}) {
  return new Promise((resolve, reject) => {
    try {
      const url =
        process.env.dbUrl + dbName + "?retryWrites=true&w=majority";

      MongoClient.connect(url, async function(err, db) {
        if (err) throw err;
        var dbo = await db.db(dbName);
        await dbo.collection(collectionName).drop(async function(err, delOK) {
          if (err) throw err;
          if (delOK) console.log("Collection: " + collectionName + " deleted");
          await db.close();
          resolve(delOK);
        });
      });
    } catch (err) {
      console.log(err)
    }
  })
}

async function updateDoc(dbName, collectionName, query = {}, data = {}, push = {}) {
  return new Promise((resolve, reject) => {
    try {
      const url =
        process.env.dbUrl + dbName + "?retryWrites=true&w=majority";

      MongoClient.connect(url, async function(err, db) {
        if (err) throw err;
        var dbo = await db.db(dbName);
        var updateData = await { $set: data , $push: push};
        await dbo.collection(collectionName).updateOne(query, updateData, async function(err, res) {
          if (err) throw err;
          console.log(res);
          await db.close();
          resolve(res);
        });
      });
    } catch (err) {
      console.log(err)
    }
  })
}

async function updateDocs(dbName, collectionName, query = {}, data = {}) {
  return new Promise((resolve, reject) => {
    try {
      const url =
        process.env.dbUrl + dbName + "?retryWrites=true&w=majority";

      MongoClient.connect(url, async function(err, db) {
        if (err) throw err;
        var dbo = await db.db(dbName);
        var updateData = await { $set: data };
        await dbo.collection(collectionName).updateMany(query, updateData, async function(err, res) {
          if (err) throw err;
          console.log(res);
          await db.close();
          resolve(res);
        });
      });
    } catch (err) {
      console.log(err)
    }
  })
}

module.exports = {
  createDatabase,
  createCollection,
  createDoc,
  createDocs,
  findDoc,
  findDocs,
  deleteDoc,
  deleteDocs,
  deleteCollection,
  updateDoc,
  updateDocs
}