const HTTP = require('http');
// console.log(HTTP);

const SERVER = HTTP.createServer((req,res)=>{
    res.end('Hello cdac');
})

SERVER.listen(9001, ()=>{
    console.log('server started');
});