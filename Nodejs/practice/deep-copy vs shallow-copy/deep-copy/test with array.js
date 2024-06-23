const arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

function deepCopyByCodeByHeart(src,dest){
    for(const key in src){
        if(Array.isArray(src[key])){
            dest[key]=[];
            deepCopyByCodeByHeart(src[key],dest[key]);
        }
        // console.log(key);
       else if(typeof src[key]=="object"){
            dest[key]={};
            deepCopyByCodeByHeart(src[key],dest[key]);
        }else{
            dest[key]=src[key];
        }
    }
    return dest;
}
const copiedArr=deepCopyByCodeByHeart(arr,[]);

console.log("Before-arr",arr);
console.log("Before-copiedArr",copiedArr);

arr[0][0]=11;

console.log("after-arr",arr);
console.log("after-copied",copiedArr);