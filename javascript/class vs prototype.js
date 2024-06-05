// class Employe{
//     int sn;
//     string mobile;
//     string address;

//     void setAddress(string address){
//         this.address=address;
//     }
//     void setMobile(string mobile){
//         this.mobile=mobile;
//     }
//     void setName(string name){
//         this.name=name;
//     }
//     void autoSerial(){
//         sn++;
//     }
// }

// Employee Akarsh =new Employe();
// Akarsh.setMobile("98976509")
// FileSystem.out.println(Akarsh.mobile)

function Employee(){
    this.department="none";
    this.mobile=''
}
function Manager(name){
    Employee.call(this)
    this.name=name;
}
Manager.prototype=Object.create(Employee.prototype);
Manager.prototype.constructor=Manager

let Akarsh=new Manager("Akarsh");
console.log(Akarsh);
console.log(Akarsh._proto_);