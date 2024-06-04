let obj ={username:"okay", mobile:9800};
if('username' in obj){
    console.log(obj.username);
}


// instance of

function xyz(){
    this.x =5;

}

let y =new xyz();
console.log(y);
console.log(y instanceof xyz);//true
console.log(obj instanceof xyz);//false