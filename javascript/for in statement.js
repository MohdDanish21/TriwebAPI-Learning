// obj={
//     name:"India",
//     code:91,
    
// }
// console.log(obj);
// console.log(obj.name);
// console.log(obj.code);

objCountry={
    name:"India",
    code:91
}
for (const key in objCountry) {
    console.log(`${key} of country is ${objCountry[key]}`);
}