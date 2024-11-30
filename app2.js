const server=require("http")
server.createServer((req,res)=>{

    res.writeHead(200,{'Content-Type':'text/html'})
        res.write("<h1 style='color:red;'>FIT</h1>")
        res.write("<br>")
        res.write("<h2>MERN</h2>")
        res.write(`
            <form action="#"methods="post">
                NAME: <input type="text" name="a1" placeholder="your name">
                PASSwords: <input type="password" name="a2" placeholder="your password">
                <input type="button" name="a3" value="submit">
            </form>
            `)
        res.end()
}).listen(6002)