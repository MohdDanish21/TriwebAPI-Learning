// let str ="HiamHere";

// let arr =Array.from(str);
// console.log(arr);



// function checkData(){
//     console.log(arguments);
//     console.log(arguments.length);//[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
    
//     let arr1=Array.from(arguments);
//     console.log(arr1);//[ 1, 2, 3, 4, 5 ] arguments to array

// }

// checkData(1,2,3,4,5);

// let arr=["a","b","c","d"];
// let keys = arr.keys();
// console.log(keys);

// for(let e of keys){
//     console.log(e); //Object [Array Iterator] {}
// }


// array.find()

// let arr =[12,13,14,15,16];

// let firstOddNumber=arr.find((value,index,ar)=>{
//     return value%2!==0;
// });
// // let firstOddNumber=arr.find(getOdd);

// // function getOdd(value,index,ar){
// //     return value%2!==0;
// //}
// console.log(firstOddNumber);


// find index()
let arr =[12,13,14,15,16,1];

let indexFirst =arr.findIndex((value,index,ar)=>{
    return value%2!=0;
})
console.log(indexFirst);