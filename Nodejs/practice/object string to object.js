let student={
    sname:"sikandar",
    friend:"ajay",
    class:"btceh",
    mobile:1234
}
console.log(student.sname);

// convert object to string
let stringFromObject=JSON.stringify(student);
console.log(stringFromObject);
console.log(stringFromObject.sname);

// convert string to object

let objectFromString=JSON.parse(stringFromObject);
console.log(objectFromString);
console.log(objectFromString.sname);