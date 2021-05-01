const express = require("express");
const server = express();
const port = 3080;

const mongo = require("./Store/MongoDB");

mongo.Run("WebTechnologiesCourse", "Stats").catch(reason => console.log(reason));

server.use(express.json);

server.use(express.static(__dirname + "/dist"));

server.get("/stats", function (request, respond) {
    try {
        mongo.Find().then(
            data => respond.json(data),
        );
    }
    catch (err)
    {
        console.error(err);
    }
})

server.listen(port);

process.on("SIGINT", function () {
    mongo.Close.catch(reason => console.log(reason));
    process.exit();
})