//Map and set objects contain element which are iterable in the order of iteration.
// Map also maintain their size


// Create Map object

let newMap= new Map()
newMap.set("name","Azhar")
console.log(newMap);

newMap.set("address","Delhi")
console.log(newMap);

console.log("Number of the element in Map=",newMap.size);

const studentName = newMap.get('name');
console.log("name from map is", studentName); 