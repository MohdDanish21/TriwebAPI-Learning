// function getNum(index){
//     while(index<5){
//         console.log(index);
//         index++;

//     }
// }       
// getNum(0);// 0 1 2 3 4 


// function getNum1(index){
//     while(index<5){
//         return index;
//         index++;
//     }
// }
// let it =getNum1(0);
// console.log(it);
// console.log(it);


function* getNum2(index){
    while(index<5){
        yield index;
        index++;
    }
}
let itt =getNum2(0);
console.log(itt);//Object [Generator] {}

function* getNum3(index){
    while(index<5){
        yield index;
        index++;
    }
}
let ittt =getNum3(0);
console.log(ittt.next().value);
console.log(ittt.next().value);
console.log(ittt.next().value);
console.log(ittt.next().value);
console.log(ittt.next().value);
console.log(ittt.next().done);