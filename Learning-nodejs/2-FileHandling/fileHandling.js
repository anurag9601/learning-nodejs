const fs = require("fs");

//this is syncronous call and also called blocking operation
// fs.writeFileSync('./test.txt' , 'hey anurag i am executed just fine.');

//this is asyncronous call and also called non-blocking operation
// fs.writeFile('./test.txt',"hey i am got edited", (err=>{}));

//readfile in a syncronous or blocking operation way
// const response = fs.readFileSync('./read.txt', "utf8");
// console.log(response)

//reading file in a asyncronous way of non-blocking operation
// fs.readFile("./read.txt", "utf-8" , (err , response)=>{
//     if(err){
//         console.log("Error", err)
//     }else if(response){
//         console.log(response);
//     }
// });

//appending new text with the text that is present in a file
// fs.appendFileSync('./test.txt', '\ni am new thing added');

//adding text in a text file using async.. appendfile
// fs.appendFile('./test.txt' , '\ni am adding using asyncronus method or non-blocking operation', (err => {}));

//copying the file using syncronus methos or blocking operation
// fs.copyFileSync('./read.txt' , './copyread.txt');

//deleting files from the folder using syncronus method or blocking operation
// fs.unlinkSync('./text.txt');

//deleting file from the folder using asyncronus method or non-blocking operation
// fs.unlink('./copyread.txt', (err => {}));

//creating directory using syncronus method or blocking operation
// fs.mkdirSync('sync-mkdir');

//creating directory using asyncronus method or non-blocking operation
// fs.mkdir('async-mkdir' , (err => []))

