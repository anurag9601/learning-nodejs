const express = require("express");
const users = require('./MOCK_DATA.json')
const fs = require("fs");

const app = express();

const PORT = 8000;


//these are called routes

app.get('/api/users' , (req , res)=>{
    return res.json(users);
});

//example of html response

app.get('/users' , (req , res)=>{
    return res.send(
        `${users.map(item => `<ul>
        <li>${item.first_name}</li>
        </ul>`).join('')}`
    )
})

//now for getting this request in our console we use midaleware that is for encode
app.use(express.urlencoded({extended: false}));

app.post('/users' , (req , res)=>{
    let body = req.body;
    users.push({id:users.length + 1, ...body});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users) , (err , data)=>{
        return res.json({status: `Success added data with id ${users.length}`});
    })
});

//now the post patch and delete data is quite problematic because our browser is only the get request 


//now as we can see these 3 request's urls are same to insted of writing this in a sparately we can write it together 

// app.get('/api/users/:id', (req , res)=>{
//     //:id is dynamic path parameter we can treat as a variable
//     const id = parseInt(req.params.id);
//     const user = users.find(user => id === user.id);
//     res.send(user);
// })

// app.patch('/api/users/:id' , (req, res)=>{});

// app.delete('/api/users/:id' , (req, res)=>{});

app.route('/api/users/:id').get((req , res)=>{
        //:id is dynamic path parameter we can treat as a variable
        const id = parseInt(req.params.id);
        const user = users.find(user => id === user.id);
        return res.send(user);
    }).patch((req , res)=>{
        users.map((item)=>{
            if(item.id === req.body.id){
                item.first_name = req.body.first_name
                item.last_name = req.body.last_name
            }
        })
        fs.writeFile('./MOCK_DATA.json' , JSON.stringify(users) , (err , data)=>{
            return res.json({status : "success"});
        })
    }).delete((req, res)=>{
        return res.json({status : "pending"});
    })




app.listen(PORT , ()=>console.log(`your server started on port :${PORT}`));

