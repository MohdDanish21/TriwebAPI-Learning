
const db =require('../Util/database');
module.exports.insert=async(userData)=>{
    // console.log(userData);

   let id =0;
    try {
   let query="INSERT INTO `users`(`name`,`email`,`password`,`remark`) values(?,?,?,?)";
    let result=await db.execute(query,[userData.name,userData.email,userData.password,userData.remark]);
    id=result[0].insertId;
    console.log(result[0].insertId);
    } catch (error) {
        console.log(error);
        return false;
    } 
    return id;
}

module.exports.get=async(userData)=>{
    let retData='';
    try {
        let query ="SELECT *  FROM `users`  WHERE id=?";
        let result=await db.execute(query,[userData.id]);
        retData=result[0][0];
    } catch (error) {
        console.log(error);
    }
    return retData;
}

module.exports.update=async(userData)=>{
   
    try {
        let query ="UPDATE `USERS` SET `password`=?  WHERE id=?";
        // let result=await db.execute(query,[userData.password,userData.id]);
        await db.execute(query,[userData.password,userData.id]);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
    
}

module.exports.delete=async(userData)=>{
   
    try {
        let query ="DELETE FROM `USERS`  WHERE id=?";
        // let result=await db.execute(query,[userData.id]);
        await db.execute(query,[userData.id]);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
    
}