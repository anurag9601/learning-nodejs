const express = require("express");
const fs = require("fs");
const PORT = 8000;

const app = express();

//creating middleware in express
app.use(express.urlencoded({extended : false}));

//middleware is like middleman there can be more then 1 middleware but we have to pass next() because it necessery to run the next function after middleware 

app.use((req , res , next)=>{
    console.log("this is response from the middleware 1");
    // req.body = "hey i am a reqest from the middleware";
    fs.appendFile("./log.txt" , `\n${Date.now()} : ${req.ip} : ${req.method}`, (err , data)=>{
        next();//this is necessary for runing the code that is after this
    })
})

app.use((req , res , next)=>{
    console.log("this is response from the middleware 2");
    next();
})


//http headers it is called meta data because it is a data of the data 
//headers is like some data about our api
app.get("/" , (req,res)=>{
    console.log(req.headers)//by doing this we can also console log our req header 
    res.setHeader("X-myname" , "anurag mishra")// this is called custom header
    // but it is best practice that always decode your custom header with X like this X-myname
    res.json({response: "pending"});
    //this message is pass from the middleware that we cas pass from the middleware and use it like this
    console.log(req.body);
})

//now status http just like this when we are creating somthing then it have to be send us 201 creat code for example
app.post("/post", (req , res)=>{
    const body = req.body
    //now creating server error that is when the server is showing status between 500 to 599 for example
    if(!body.first_name || !body.last_name || !body.email){
        return res.status(404).json({msg: "fill the complete form.."})
    }
    console.log(body);
    res.status(201).json({response: "successful"});
})

app.put("/put", (req , res)=>{
    res.json({response: "pending"})
})

app.listen(PORT , console.log(`Your server is started on port ${PORT}`));