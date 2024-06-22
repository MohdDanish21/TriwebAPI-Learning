const obj={
    a:1,
    b:2,
    c:3
};

const newObj={};
Object.assign(newObj,obj) // here spread operator is on object 
console.log("Before-obj",obj);
console.log("Before-newObj",newObj);

obj["a"]=8;

console.log("after-obj",obj);
console.log("after-newObj",newObj);