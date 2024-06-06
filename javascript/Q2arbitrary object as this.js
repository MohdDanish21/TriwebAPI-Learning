// quesion 2

function printName(){
    console.log(`${this.firstName} ${this.lastName}`);
}

const student1={
    firstName:"Danish",
    lastName:"Azhar",
};
const callItLaster=printName.bind(student1);
callItLaster();