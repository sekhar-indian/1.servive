const Sequelize=require('sequelize');
const sequelize=require('../util/db');

const products=sequelize.define("products",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price:{
        type:Sequelize.DOUBLE,
        allowNulL:false,
    },
    discriprion:{
        type:Sequelize.STRING,
        allowNull:false
    },
    imglink:{
        type:Sequelize.STRING,
        allowNull:false
    }
})
    module.exports=products;