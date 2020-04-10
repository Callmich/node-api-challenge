const express = require('express');

const server = express();

server.use(express.json());

//Put Routers here

//Put Data here


server.get('/', (req, res) =>{
    res.status(200).json({message: "Lets get started on this sprint challenge"})
})

module.exports = server;