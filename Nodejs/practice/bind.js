let student2={
    sname:"Azhar",
    mobile:"897678"
}



let student={
    sname:"Raj",
    mobile:90760,

    getName:function(){
        console.log(this.sname);
    }
}


let sn =student.getName.bind(student);
setTimeout(sn,1000);

let std =student.getName.bind(student2);
setTimeout(std,1000);
    