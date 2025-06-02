const express = require('express');
const app = express()
app.use(express.json());
require('./db.js');
var userModel = require('./userModel.js')

app.get("/users", async (req,res) =>{
    try{
        var result = await userModel.find();
        res.send(result);
    }
    catch(err){
        console.log(err);
        res.send("Err in fetch") 
    }
});

app.post("/users", async (req,res) =>{
    try{
        var instance = new userModel(req.body);
        await instance.save();
        res.send("user Added");
    }
    catch(err){
        console.log(err);
        res.send("Err in add") 
    }
});


app.put("/users", (req,res) =>{
    res.send('update data from db')
});
app.delete("/users", (req,res) =>{
    res.send('delete data from db')
});

app.listen(5500);