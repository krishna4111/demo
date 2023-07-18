const Sequelize=require('sequelize');

const photos=new Sequelize('demo2','root','root',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=photos;