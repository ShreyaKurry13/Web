const fs = require('fs');
const http = require('http');

const SERVER = http.createServer((req,res)=>{
    fs.readFile('./home.html','utf-8',(err,data) =>{
        if(!err){
            res.end(data);
        }
    })
});
SERVER.listen(9001)