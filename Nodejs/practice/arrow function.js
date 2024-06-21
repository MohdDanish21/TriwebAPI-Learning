//()=>{}
//uname=>{}
//uname=>"Hi"+name

const addtwoNumber=(num1,num2)=>{
    return num1+num2;
}

const addHiToName= uname=>{
    return "Hi"+uname;
}

const addHelloToName=uname=> "Hello" + uname;

const result=addtwoNumber(2,3);
console.log("result",result);


const hiname=addHiToName(" "+"Azhar");
console.log(hiname);

const helloname=addHelloToName(" "+"Aakarsh");
console.log(helloname);


const isThis=()=>{
    console.log(this);
}
console.log(this);
isThis();