// node js working first it takes request of client then that request goes in event queue it aranges there one by one nodes js request process work of FIFO methos (fist in first out) after aranging the request in event queue it goes in event loop event loop it looping everytime and waiting for the request and after getting request when request is syncronus ( blocking request of blocking operation) the it's give the request to the threads threads are like workers of the stystem they take request and process it there is mainly minimum 4 threads in a system but this is the problem because when the request is always syncronus and it will pass to threads but there only minimum 4 threads there can me more then 4 threads but still there is 12 threads when your server get 12 request then your all threads are buys and because server use FIFO method it will put 13th request of next request on hold before completing there first client's request so this is the very big problem because it will make our server very slow so here is come to solve this problem that is asyncronus methos ( non-blocking request or non-blocking operation ) bacause in asyncronus method the event loop just take the request and pass the response thatway it need's callback function to run.

//here is some examples of blocking request and  non-blocking request 

let fs = require('fs');
let os = require('os');

//blocking request synchronous method meaning in hindi ek sath hona;
// console.log("1")
// console.log(fs.readFileSync('./test.txt', 'utf-8'));
// console.log("2")

//non-blocking request asynchronous method meaning in hindi ek sath nahi hona;
// console.log("1")
// fs.readFile('test.txt','utf-8' , (err,request)=>{
//     console.log(request);
// })
// console.log("2")

//there is a minimum 4 threads in a server 
//and maximum threads it's all depend on your pc's configurations of which server you are buying there pc's configuration
//for example when you have 8 cores it mean you have 8 threat
//8 cores === 8 threads

//now by using build in module of nodejs that is os (operating system) module we will configure our pc's cores
//so for this the command is 
console.log(os.cpus().length);