const http = require ("http")


const app = http.createServer((req, res) =>{
    const url = req.url
    const method = req.method
    console.log(url)
})

app.listen(8080, () =>{
    console.log("server listening on port http://localhost:8080")
})