let newSet= new Set()
newSet.add(34);
newSet.add(44);
newSet.add(54);
newSet.add(64);
console.log(newSet);
newSet.add(74);
console.log(newSet);

newSet.delete(74);
console.log(newSet);

if(newSet.has(64)){
    console.log("Has method is working")
}
console.log(newSet);


for (const element of newSet) {
    console.log("element:",element);
}
