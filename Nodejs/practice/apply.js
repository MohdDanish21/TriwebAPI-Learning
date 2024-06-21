// function product(pname,price){
//     this.pname=pname;
//     this.price=price;
// }


// function user(uname,pname,price){
//     // this.uname=uname;
//     // this.pname=pname;
//     // this.price=price;
//     product.call(this,pname,price);
// }

// const usr1= new user("Azhar","Laptop",20000);
// console.log(usr1.pname);
// console.log(usr1);


// in case of apply i will send an array I here i will use rest operator. 


function marksDetails(...marks){
    this.subject1=marks[0];
    this.subject2=marks[1];
    this.subject3=marks[3];
    this.subject4=marks[4];
    this.subject5=marks[5];

    let status ='pass';
    marks.forEach((num)=>{
        if(num<33){
            status='fail';
        }
    })
    this.result=status;
}


function student(sname,...marks){
    this.sname=sname;
    marksDetails.apply(this,marks);
    // this.subject1=marks[0];
    // this.subject2=marks[1];
    // this.subject3=marks[3];
    // this.subject4=marks[4];
    // this.subject5=marks[5];
    
}

const std1= new student("Azhar",45,34,36,79,98,100);
console.log(std1);


