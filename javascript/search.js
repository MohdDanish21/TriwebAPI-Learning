// Search is method of string not a regex class
// string is method of class
//test()....> returns true/false

let regex=/\w/g

let str = 'Hi i am here ';
let resIndex=str.search(regex);
console.log(resIndex);