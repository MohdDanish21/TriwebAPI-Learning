let obj ={name:"Azhar",address:"india",Mobile:"1234",email:"oaky@gmail.com"}
for (const key in obj) {
    console.log(`value on ${key} is ${obj[key]}`);
}


let getKeys=Object.keys(obj);
console.log(getKeys);