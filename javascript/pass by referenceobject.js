function updateName(student){
    student.name = 'Hi' + student.name;
    console.log(student);
}

let objs={name: "Danish"};
updateName(objs);
console.log("old object is  ",objs);


// Object(A Non-primitive value such as Array or a user-defined object)as a parameter and function 
//changes the object's properties