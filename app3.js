const a=require("http")
const fs = require("fs")
a.createServer((req,res)=>{
    fs.readFile("new.html",(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()


    })

}).listen(6005)