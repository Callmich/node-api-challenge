const express = require('express');

const server = express();

server.use(express.json());

//Put Routers here
const projectRouter = require('./routers/projectRouter');
const actionRouter = require('./routers/actionRouter')

//Put Data here
server.use("/api/project", projectRouter);
server.use("/api/action", actionRouter);

server.get('/', (req, res) =>{
    res.status(200).json({message: "Lets get started on this sprint challenge"})
})

module.exports = server;