const express = require('express');
const app = express();

const {tempdata} = require('./data');

app.get('/',(req,res)=>{
    res.send("Welcome Home");
})

app.get('/array', function(req, res) {
    res.json([{
        number: 1,
        name: 'John',
        gender: 'male'
      },
      {
        number: 2,
        name: 'Ashley',
        gender: 'female'
      }
    ]);
  });

app.listen(2080,()=>console.log("Port Working"))