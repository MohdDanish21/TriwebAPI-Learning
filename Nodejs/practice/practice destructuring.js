
// Here Work on Array
const student={
    'name':"Azhar",
    'mobile':"8795",
    'address':"India"

};
const marksOfStudents=[40,98,65,43,66,98,75,51,63];
[subject1Marks,subject2Marks,subject3Marks,subject4Marks,subject5Marks,...otherMarks]=marksOfStudents;
// subject1Marks=marksOfStudents[0];
// subject2Marks=marksOfStudents[1];
// subject3Marks=marksOfStudents[2];
// subject4Marks=marksOfStudents[3];
// subject5Marks=marksOfStudents[4];

console.log("subject1Marks",subject1Marks);
console.log("subject1Marks",subject1Marks);
console.log("subject1Marks",subject1Marks);
console.log("subject2Marks",subject2Marks);
console.log("subject3Marks",subject3Marks);
console.log("other marks",otherMarks);

console.log("...................................................");
// Here Work on Object

const student1={
    'name':"Azhar",
    'mobile':"8795",
    'address':"India"

};
const{name}=student1;
const{mobile}=student1;
console.log(name);
console.log(mobile);