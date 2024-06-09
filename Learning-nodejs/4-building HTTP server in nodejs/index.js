// const http = require('http');
// const fs = require("fs");

// const myServer = http.createServer((req , res)=>{
//     let log = `${Date.now()} ${req.url} server request\n`
//     fs.appendFile('./logdata.txt', log , ((err,data) => {
//         switch(req.url){
//             case "/" : res.end('Homepage');
//             break
//             case "/about": res.end('hey anurag mishra here');
//             break
//             case "/contact-us" : res.end('my-contact:-+91111111111');
//             break
//             default: res.end("404 data not found");
//             break
//         }
//     }))
// })

// myServer.listen('3000' , ()=>console.log("your server is started"));

//creating http server ###practice
const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req , res)=>{{
    const req_data = `request time:${Date.now()} client IP adress:${req.socket.remoteAddress} req location:${req.url} \n`
    fs.appendFile("test2.txt", req_data , ((err , response)=>{
        switch(req.url){
            case "/": res.end("this is a homepage");
            break;
            case "/about": res.end("hey here anurag this side");
            break;
            case "/contact-us" : res.end("My contact number is +91111111111");
            break;
            default: res.end("404 Data Not Found");
            break;
        }
    }));
}})

myServer.listen("5137", console.log("your server has been started"))