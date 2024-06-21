function product(productName,price){
    this.productName=productName;
    this.price=price
}

const p1=new product("laptop",10000);
const p2=new product("mouse",1000);
console.log(p1);
console.log(p2);


// function student(sName){
//     this.sName=sName;
// }
// const student1 =new student("Aakarsh");
// console.log(student1.sName);

function student(sName,productName,price){
    // this.productName=productName;
    // this.price=price;
    product.call(this,productName,price);
    this.sName=sName;
}
const student1 =new student("Aakarsh","laptop","2000")
console.log(student1.sName,"purchased a ",student1.productName,"for Rs",student1.price);