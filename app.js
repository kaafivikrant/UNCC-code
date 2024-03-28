// const http = require('node:http');
// const fs = require('node:fs');

// const server = http.createServer();

// server.on("request", (request, response) => {
//     const result = fs.readFileSync("./text.txt");
//     response.setHeader("Content-Type", "text/plain");
//     response.end(result);
// })

// server.listen(4080, "127.0.0.1", () => {
//     console.log("Server has started on", server.address())
// })

const express = require("express");
const app = express();

app.get("/", (request, response) => {
    console.log("1")
    response.send("esss wwdddwrld! !");
});

app.get("/add", (request, response) => {
    response.send("Hello, 2! !");
});

app.listen(3000, () => {
    console.log("Server has started on 3000")
})

const EventEmitter = require("events");

class Emitter extends EventEmitter {}

const myE = new Emitter();

// Create only one myE.on for all events


myE.on('eventName', (event) => {
  console.log(`Received event: ${event}`);
});

const arr = ['foo', 'woo', 'doo'];

arr.forEach((item) => {
    myE.emit('eventName', item);
})
