// let decideNumber = 'add';
let decideNumber = 'subtract';


let getResult;
if(decideNumber=='add'){
    getResult=function(num1,num2){
        console.log(num1+num2);
    }
   
}else if(decideNumber=='subtract'){
    getResult=function(num1,num2){
        console.log(num1-num2);
    }

}
getResult(5,6);