const obj={
    a:{
        p:1,
        q:2,
    },
    b:2,
    c:3,
};

const newObj={...obj}; 
console.log("Before-arr",obj);
console.log("Before-newArr",newObj);

obj["a"]["p"]=11;

console.log("after-arr",obj);
console.log("after-newArr",newObj);