function getFunction(num){
    function square(){
        console.log(num*num);
    }
    square()
}
getFunction(5);


function getFunction(num){
    function square(){
        return num*num;
    }
    let sqr = square();
    console.log(sqr);
}
getFunction(5);