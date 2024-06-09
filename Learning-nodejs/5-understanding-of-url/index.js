//handling urls in nodejs

const url = require("url");
const http = require("http");
const fs = require('fs');

const myServer = http.createServer((req , res)=>{
    if(req.url === "/favicon.ico"){ return res.end()};
    //getting reqest methods using req.method
    const log = `${req.url} ${req.method} request type request from server\n`
    const myUrl = url.parse(req.url , true);
    fs.appendFile('req_data.txt', log , ((err, response)=>{
        switch (myUrl.pathname){
            case "/" : res.end("this is a homepage");
            break;
            case "/about" : 
            const queryParaName = myUrl.query.myname
            res.end(`hey it's ${queryParaName} here..`);
            break;
            case "/contact-us" :
            const queryParaContact = myUrl.query.contact;
            res.end(`my contact no:- +91${queryParaContact}`);
            break;
            default: res.end("404 data not found");
            break;
        }
    }))
})

myServer.listen("8000" , console.log("Your server is started"))