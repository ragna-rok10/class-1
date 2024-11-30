const server=require("http")
server.createServer((req,res)=>{
    res.write("THIS IS OUR NEW NODE SERVER.")
    res.write("RAJAT DEY")
    res.write("HELLO WORLD!!")
    res.end()

}).listen(6001)