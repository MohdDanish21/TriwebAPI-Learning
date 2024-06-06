//how will you write a method onn instance of a date ,which will give you next date.

function getNextDate(){
    let date =this.getDate();
    return date +1;
}

// Date instance 
let myDateInstance=new Date();
//attach function to date instance 
myDateInstance.getNextDate=getNextDate;

const nextDate=myDateInstance.getNextDate();
console.log(`next date is ${nextDate}`);