const express = require("express");
const server = express();
const port = 3060;
const path = require("path");

const mongo = require("./Store/MongoDB");


server.listen(port,function (){
    console.log(`Start listen ${port}`);
});

mongo.Run("WebTechnologiesCourse", "Stats").catch(reason => console.log(reason));

server.use(express.static(path.join(__dirname,"../dist")));

server.get("/", function (request, respond) {
    respond.sendFile(path.join(__dirname,"../dist/index.html"))
});

server.get("/stats", function (request, respond) {
    try {
        mongo.Find().then(
            data => respond.json(data),
        );
    } catch (err) {
        console.error(err);
    }
})

process.on("SIGINT", function () {
    mongo.Close().catch(reason => console.log(reason));
    process.exit();
})