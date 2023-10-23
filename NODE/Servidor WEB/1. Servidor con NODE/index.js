const http = require("http")


const app = http.createServer((req,res)=>{
    res.statusCode = 300
    res.end("<h1>holaaaa</h1>")
})

app.listen(8080, () =>{
    console.log("Server listening on port http://localhost:8080")
})
