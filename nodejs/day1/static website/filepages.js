const fs = require('fs');
const http = require('http');

const SERVER = http.createServer((req,res)=>{

    switch(req.url){
        case '/':
            var filepath = './home.html';
            break;
        case '/about':
            var filepath = './about.html';
            break;
        case '/contact':
            var filepath = './contact.html';
            break;
        default:
            var filepath = './404.html';
    }

    fs.readFile(filepath,'utf-8',(err,data) =>{
        if(!err){
            res.end(data);
        }
        else{
            console.log(err);
            
        }
    })
});
SERVER.listen(9900,()=>{
    console.log('server started');
    
})