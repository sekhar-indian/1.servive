const Sequelize=require('sequelize');
const sequelize=require('../util/db');

const athontecationData=sequelize.define('athontecationData',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },email:{
        type:Sequelize.STRING,
        allowNull:false

    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports=athontecationData;