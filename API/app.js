const express = require("express");
const server = express();
const port = 3060;
const path = require("path");
const dbName = "WebTechnologiesCourse",
    collectionName = "Stats";
const store = require("./Store/MongoDB");

server.listen(port, function () {
    console.log(`Start listen ${port}`);
});

store.Run(dbName, collectionName).catch(reason => console.log(reason));

server.use(express.static(path.join(__dirname, "../dist")));

server.get("/", function (request, respond) {
    respond.sendFile(path.join(__dirname, "../dist/index.html"))
});

server.get("/stats", function (request, respond) {
    try {
        store.Find().then(
            data => respond.json(data),
        );
    } catch (err) {
        console.error(err);
    }
})

server.get("/result", function (request) {
    let data = {
        value1: request.query.value1,
        operator: request.query.operator,
        value2: request.query.value2,
        result: request.query.result
    }
    store.Insert(data).catch(reason => console.log(reason));
});

process.on("SIGINT", function () {
    store.Close().catch(reason => console.log(reason));
    process.exit();
})