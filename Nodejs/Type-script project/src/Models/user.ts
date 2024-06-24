const addUserToDB=(userName:string,password:string,age:number)=>{
    console.log(userName,password,age);
    return "user Registration Done!";
}

// type lockedState="locked|unlocked";
//interface
interface User{
    id:number,
    uname:string,
    password:string,
    age:number,
    is_active:true|false,
    accountStatus: string |number// union type 
}

const updateUserData=(objUser:User):string=>{ // we can write function return type like (string and number)
    
    console.log(objUser.uname);
    // return 1;
    return "Update Done!";
}

export{addUserToDB,updateUserData}