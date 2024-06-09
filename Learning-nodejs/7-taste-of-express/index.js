// const url = require("url");
// const http = require("http");
// const fs = require('fs');

// const myServer = http.createServer((req , res)=>{
//     if(req.url === "/favicon.ico"){ return res.end()};
//     //getting reqest methods using req.method
//     const log = `${req.url} ${req.method} request type request from server\n`
//     const myUrl = url.parse(req.url , true);
//     fs.appendFile('req_data.txt', log , ((err, response)=>{
//         switch (myUrl.pathname){
//             case "/" : res.end("this is a homepage");
//             break;
//             case "/about" : 
//             const queryParaName = myUrl.query.myname
//             res.end(`hey it's ${queryParaName} here..`);
//             break;
//             case "/contact-us" :
//             const queryParaContact = myUrl.query.contact;
//             res.end(`my contact no:- +91${queryParaContact}`);
//             break;
//             default: res.end("404 data not found");
//             break;
//         }
//     }))
// })

// myServer.listen("8000" , console.log("Your server is started"))

//so as you can see there is so pain in http and this is just begining in real project you will want to handle lot's of links so how many switch cases will you write it code maintaibility will be zero and your code will be look messy so for soloving this problem and maintain the code clear we use express.js

//the same http code that is on top in express

const express = require("express");
const port = 8000;

const app = express();

app.get("/" , (req, res)=>{
    res.send('this is home-page')
})

app.get("/about" , (req , res)=>{
    res.send(`hey ${req.query.myname}`)
})

app.listen(port , console.log("your server is started"));

//now the code is looking so clear and maintanable but express is writen in http that cure us to write messy code