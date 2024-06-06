function getNextDate(){
    let date =this.getDate();
    return date +1;
}

// Date instance 
let myDateInstance=new Date();
//attach function to date instance 
Date.prototype.getNextDate =getNextDate;

const nextDate=myDateInstance.getNextDate();
console.log(`next date is ${nextDate}`);

let myDateInstance1=new Date();


const nextDate1=myDateInstance.getNextDate();
console.log(`next date is ${nextDate1}`);