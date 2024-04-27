// // const http = require('node:http');
// // const fs = require('node:fs');

// // const server = http.createServer();

// // server.on("request", (request, response) => {
// //     const result = fs.readFileSync("./text.txt");
// //     response.setHeader("Content-Type", "text/plain");
// //     response.end(result);
// // })

// // server.listen(4080, "127.0.0.1", () => {
// //     console.log("Server has started on", server.address())
// // })

// const express = require("express");
// const app = express();

// app.get("/", (request, response) => {
//     console.log("1")
//     response.send("esss wwdddwrld! !");
// });

// app.get("/add", (request, response) => {
//     response.send("Hello, 2! !");
// });

// app.listen(3000, () => {
//     console.log("Server has started on 3000")
// })

// const EventEmitter = require("events");

// class Emitter extends EventEmitter {}

// const myE = new Emitter();

// // Create only one myE.on for all events


// myE.on('eventName', (event) => {
//   console.log(`Received event: ${event}`);
// });

// const arr = ['foo', 'woo', 'doo'];

// arr.forEach((item) => {
//     myE.emit('eventName', item);
// })


// var bnd = "1011";
// bnd = bnd.split("");

// console.log(bnd)

function pow2(n) {
    return 2 << (n-1);
}

function BN(bnd){
    // bnd = bnd.split(""); // ~ 1.7
    bnd = Array.from(bnd, Number); // ~ 1.3
    // bnd = [...bnd]; // ~ 1.75
    let sum = 0;
    for(let i=bnd.length-1, sum = 0 , j = 0; i>=0; i--) { // ~ 680ms
        // sum += bnd[i] * Math.pow(2, j++); // ~ 1.3s
        sum += bnd[i] * pow2(j++);
    }

    /* ~ 684ms
        var len = bnd.length;
        var j = 0;
        while(len--){
            sum += bnd[len] * pow2(j++);
        }
    */

    return sum % 1 == 0? sum: "Invalid Binary Number";
}


console.time('doSomething')


for (let i = 0; i < 1000000; i++) {
    // Generate test case
    let binaryNumber = Math.floor(Math.random() * 1000000).toString(2);

    // Call BN function
    BN(binaryNumber);
}

console.timeEnd('doSomething')

