// being able to use an object as a key is an important Map features.

const student1 ={sname:"Azhar"};
const student2={sname:"Arzoo"};

const studentMap= new Map();
studentMap.set("key1",14);
console.log(studentMap);
console.log(studentMap.get("key1"));

console.log("........................");

studentMap.set(student1,"He is good student");
studentMap.set(student2,"He is average student");
console.log(studentMap);