// function getData(){
//     let obj={
//         ename:"Azhar",
//         salary:100000
//     }
//     return obj;
// }

// let {ename,salary}=getData();
// console.log("ename:",ename,"salary:",salary);// object destructuring

// let {ename:employeeName, salary:employeeSalary}=getData();
// console.log("ename:",employeeName,"salary:",employeeSalary);// object matching

//3 for deep matching direct value and direct de structuring 
function getData(){
    let obj={
        ename:"Azhar",
        salary:100000,
        location:{
            city:"Bangalore"
        }
    }
    return obj;
}

let{ename:employeeName, salary:employeeSalary, location:{city:employeeCity}}=getData();
console.log("ename:",employeeName,"salary:",employeeSalary,"location:",employeeCity);