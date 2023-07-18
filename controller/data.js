const dataModel=require('../model/data');

const addDetails=async (req,res)=>{
    try{
        const {name,description,mimetype,mediametadate}=req.body;

        await dataModel.create(name,description,mimetype,mediametadate)
        res.status(200).json({success:'true' , message:'details stored successfully'});
    }
    catch(err){
        console.log(err);
        res.status(400).json({ error:err })
    }
    
}

const fetchAll=async (req,res)=>{
    try{
       const data= await dataModel.findAll();
       res.status(200).json({success:'true' , details:data});

    }
    catch(err){
        console.log(err);
        res.status(400).json({success:'false',message:'something went wrong'})
    }
}



const updateDetail=async (req,res)=>{
    try{
      const detailId=req.body.detailId;
      const update=await dataModel.update({where:{id:detailId}},{name:'none',description:'nothing'});
      res.status(200).json({success:'true' , message:'details updated successfully'})

    }
    catch(err){
        console.log(err);
        res.status(400).json({success:'false',message:'something went wrong'})
    }
}


const deleteDetail=async (req,res)=>{
    try{
        const detailId=req.body.detailId;
        const update=await dataModel.destroy({where:{id:detailId}});
        res.status(200).json({success:'true' , message:'details deleted successfully'})
    }
    catch(err){
        console.log(err);
        res.status(400).json({success:'false',message:'something went wrong'})
    }
}

module.exports={
    addDetails,
    fetchAll,
    updateDetail,
    deleteDetail

}