const { MongoClient } = require("mongodb");
const fs=require("fs");

const credentials=fs.readFileSync("API/Store/X509-cert-5440778677966421621.pem")

const uri =
    'mongodb+srv://cluster0.i3ly5.mongodb.net/myFirstDatabase?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority';

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    sslKey: credentials,
    sslCert: credentials
});

let collection;

async function Run(dbName, collectionName) {
    await client.connect();
    collection = client.db(dbName).collection(collectionName);
}

async function Insert(data) {
    if (data.isArray) await collection.insertMany(data);
    else await collection.insertOne(data);
}

async function Find() {
    return await collection.find().toArray();
}

async function Close() {
    await client.close();
}

module.exports = {
    Run,
    Insert,
    Find,
    Close,
}
