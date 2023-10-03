const express=require("express")
const router=express.Router()
const {getAllClass,getByCourse}=require("../controllers/classs")
const {getOneClass}=require("../controllers/classs")

router.get("/getAll",getAllClass)

router.get("/getOne/:id",getOneClass)
router.get('/getByCourse',getByCourse)


module.exports=router;