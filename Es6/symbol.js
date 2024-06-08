const person={
    id:1234,
    pname:"xyz"
};


// const xyz =Symbol('xyz');
// person[xyz]="Hidden Data";

// // console.log(person);
// // person.id=2
// // console.log(person);
// // console.log(Object.getOwnPropertyNames(person));

// console.log(person[xyz]);

// const Iam = Symbol('xyz');
// console.log(person[Iam]);
// console.log(person[xyz]);

const xyz =Symbol.for('xyz');
person[xyz]="Not Hidden data";
console.log(person[xyz]);

const IKnowThis=Symbol.for('xyz');
console.log(person[IKnowThis]);