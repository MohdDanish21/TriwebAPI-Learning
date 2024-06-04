function multipleArguments(multiplier,...arg){
    arg.forEach(elem=>{
        console.log(multiplier*elem);
    })
}
console.log("................");
multipleArguments(2,4,5);

console.log("................");
multipleArguments(2,4,5,6);

console.log("................");
multipleArguments(2,4,5,6,10,11);


// Always last variable is rest parameter