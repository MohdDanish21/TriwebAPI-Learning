const Sequelize=require('sequelize');

const sequelize=new Sequelize("triwebapi learning","root","",{
    dialect:"mysql",
    host:"localhost",
    port:3307
});



module.exports=sequelize;