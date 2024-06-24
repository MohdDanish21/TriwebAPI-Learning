
import {Request,Response} from 'express';
import {addUserToDB,updateUserData} from '../Models/user';


const registerUser=(req:Request,res:Response)=>{



    const userName:string="Azhar";
    const password:string="password";
    const age=31;

    const result=addUserToDB(userName,password,age);
    res.send(result);
}


const checkTypeAndInterface=(req:Request,res:Response)=>{


    interface Point{
       readonly x:Number,
        readonly y:Number,
    }


    let num:Point={x:1,y:4};
    // num.x=4;  // can not assign 'x' because it is a read only property

    // console.log(x)
    
    // union and self define types
    // type status=true|false;
    type lockedState="locked" | "unlocked";// union type sel declared created type
    let xState: lockedState= "locked";



    const myUser={
        id:1,
        uname:"Azhar",
        password:"string",
        age:21,
        is_active:false,
        accountStatus:5
    }
    const result=updateUserData(myUser);
    res.send(result);
}
export {registerUser,checkTypeAndInterface}  // type script tells every error at compile time