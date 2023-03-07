const obj={
    name:"amrik",
    lname:"singh",
    city:"bath"
}
console.log(obj);

const jsondata=JSON.stringify(obj)
console.log(jsondata);
const objdata=JSON.parse(jsondata)
console.log(objdata);