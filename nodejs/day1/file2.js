const FS = require('fs');

console.log('Start');

FS.readFile('./home.html','utf-8',(err,data) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})

console.log('end');