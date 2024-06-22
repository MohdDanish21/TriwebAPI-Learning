const obj={
    a:1,
    b:2,
    c:3
};

const newObj={...obj}; // here spread operator is on object 
console.log("Before-obj",obj);
console.log("Before-newObj",newObj);

obj["a"]=8;

console.log("after-obj",obj);
console.log("after-newObj",newObj);// spread object create a new object not create the reference of that object