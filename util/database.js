// const client = await MongoClient.connect('mongodb+srv://euleredu7:236248*@cluster0.mnu2o.mongodb.net/', { useNewUrlParer: true})
// export {client}

const { MongoClient } = require("mongodb")

const url = 'mongodb+srv://euleredu7:236248*@cluster0.mnu2o.mongodb.net/'
const options = { /*useNewUrlParser: true*/ }
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}

export { connectDB }