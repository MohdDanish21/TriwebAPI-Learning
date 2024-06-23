const obj={
    a:{
        p:1,
        q:2,
    },
    b:2,
    c:3,
};

function deepCopyByCodeByHeart(src,dest){
    for(const key in src){
        // console.log(key);
        if(typeof src[key]=="object"){
            dest[key]={};
            deepCopyByCodeByHeart(src[key],dest[key]);

        }else{
            dest[key]=src[key];
        }
    }
    return dest;
}
const copiedObject=deepCopyByCodeByHeart(obj,{});

console.log("Before-obj",obj);
console.log("Before-copiedObject",copiedObject);

obj["a"]["p"]=11;

console.log("after-obj",obj);
console.log("after-copied",copiedObject);