const express = require('express');
const app = express()

let person = {
    "name": 'Varsha',
    "age":32,
    "password":'root',
}

app.use((req,res,next)=>{
    person.name==='Varsha'?next():res.send("Not allowed");
})
app.use((req,res,next)=>{
    req.userDetails = 'valid';
    person.password==='root'?next():res.send("Invalid use");
})
app.get('/',(req,res)=>{
    res.send('Welcome ' + req.userDetails);
})
app.listen(8080);
