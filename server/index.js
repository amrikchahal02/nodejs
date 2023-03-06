const http =require("http")
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("1st server my is this")
    }
    else if(req.url=="/download"){
        res.end("download page this is hai")
    }
    else{
        res.end("<h1>404:Page could not be found</h1>")
    }
})
server.listen(12,()=>{
    // console.log();
    console.log("server listing on port whatever");
})