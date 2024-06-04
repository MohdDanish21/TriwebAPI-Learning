const str = String("Hi I am here.");

if(str.includes('I')){
    console.log("yes starts with I");
}
else{
    console.log("No string does not start with I");
}


const str1="I am going.";
const str2=str1+str;
console.log(str2);

const str3=str.concat(str1);
console.log(str3);