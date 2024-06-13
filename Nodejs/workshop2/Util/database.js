const mysql =require('mysql2');
const pool =mysql.createPool({
    host:"localhost",
    database:"triwebapi learning",
    user:"root",
    password:"",
    port:3307
});

module.exports=pool.promise();