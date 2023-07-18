const express=require('express');
const app=express();

const DataRoutes=require('./routes/data');

app.use(express.json());

app.use('/data',DataRoutes);



sequelize
.sync()
.then(
    app.listen(3000)
)
.catch((err)=>{
    console.log(err);
})
