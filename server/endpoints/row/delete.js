const admin = require('firebase-admin');
const serviceAccount = require('./ncdbcredentials.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
};

const db = admin.firestore();

module.exports.post = async (req, res, next) => {
  var ids = []
  const body = req.body;
  const coll = await db.collection(req.params.slug);
  for(const item of body) {
    var doc = await coll.doc()
    item["uid"] = await doc.id
    await doc.set(item)
    await ids.push(doc.id)
  }
  res.json({"ids_added": ids})
}