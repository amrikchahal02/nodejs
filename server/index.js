// const http =require("http")
// cls
const http =require("http")
const fs=require("fs")

// let a=fs.readFileSync("./api.json","utf-8")
// console.log(a);

    


//  fs.readFile("api.json",(err,data)=>{
//     if(err){console.log(err);}
//      let a=JSON.parse(data)
//      console.log(a);

//     })

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("1st server my is this")
    }
    else if(req.url=="/download"){
        res.end(fs.readFileSync("./api.json","utf-8"));
    }
    else{
        res.end("<h1>404:Page could not be found</h1>")
    }
})
server.listen(122,()=>{
    // console.log();
    console.log("server listing on port whatever");
})