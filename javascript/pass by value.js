function increaseByOne(num){
    num=num+1;
    console.log(`updated value of=${num}`);
}
let a=3;
increaseByOne(a);
console.log("a=",a);  // pass by value , when we send primitive values

// Primitive parameters(such a s numbers (integer,float and all)) are passed to function by value;
