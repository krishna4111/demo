const express=require('express');
const router=express.Router();
const dataController=require('../controller/data');


router.post('/add-detail',dataController.addDetails);

router.get('/fetch-details',dataController.fetchAll);

router.post('/update-detail:detailId',dataController.updateDetail);

router.delete('/delete-detail:detailId',dataController.deleteDetail);

module.exports=router;