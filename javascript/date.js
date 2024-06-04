let date = "2024 06 3:47:20";
console.log(date);

let dateObj =new Date(date);
console.log("Month",dateObj.getMonth());
console.log("FullYear",dateObj.getFullYear());
console.log("Date",dateObj.getDate());
console.log("Time",dateObj.getTime());
console.log("Hour",dateObj.getHours());

dateObj.setMonth(7);
console.log(dateObj);