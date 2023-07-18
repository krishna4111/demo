const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const details=sequelize.define('demo2',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,

    },
    name:{
      type:Sequelize.STRING,
      allowNull:false
    },
    description:{
        type:Sequelize.STRING,
      allowNull:false
    },
    mimetype:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    mediametadata:{
        type:Sequelize.json,
      allowNull:false
    }

})

module.exports=details;