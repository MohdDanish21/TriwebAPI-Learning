let dayNum =2;

switch (dayNum){
    case 0:
        console.log("Monday");
        break;

    case 1:
        console.log("tuesday");
        break;
    case 2:
        console.log("Wednesday");
        break;
    case 3:
        console.log("Thrusday");
        break;
    case 4:
        console.log("Friday");
        break;
        
    default:
        console.log("Enter a Number b/w 0-4")
}
console.log("out of switch one");
console.log("............................");



let leaveDay=0;
switch(leaveDay){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("working day");
        break;
    case 0:
    case 6:
        console.log("weekend");
        break;
       
    default:
        console.log("Enter a Number b/w 0-4")
}