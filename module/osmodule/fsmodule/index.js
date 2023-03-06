const fs=require("fs");
//non-blocking io
// fs.writeFile("file.txt","data is to the file",()=>{
//     console.log("data added");
// })
const b= fs.writeFileSync("file2.txt","data entered")
console.log(b);
console.log("down");
fs.readFile("fil.txt",'utf-8',(err,data)=>{
    console.log(data);
})

//apend file data
fs.appendFile("file.txt","loreum200 is very good very nice",(err)=>{
    console.log(err);
})
//rename
// fs.rename("file.txt","pathan.txt",(err)=>{
//     console.log(err);
// })
fs.unlinkSync("file.txt")