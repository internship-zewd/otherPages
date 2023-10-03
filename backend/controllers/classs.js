const {classs}=require("../models")


const getAllClass= async(req,res)=>{

    classs.findAll()
    .then((classes)=>{
        res.send(classes)
        console.log(classes)
    }
        
    )
    .catch((err)=>{
        if(err){
            console.log(err)
        }
    })
}
const getOneClass=(req,res)=>{
    const class_id=req.params.id

    classs.findOne({where:{id:class_id}})
    .then((classes)=>{
        res.send(classes)
        console.log(classes)


    }
        
    )
    .catch((err)=>{
        if(err){
            console.log(err)
        }
    })
}
const getByCourse=(req,res)=>{
    console.log("Im in here")

    const {id}=req.params
    classs.findAll({where:{course_id:id}})
    .then((classes)=>{
        res.send(classes)
        console.log(classes)
    })
}

module.exports={
    getAllClass,
    getOneClass,
    getByCourse,
}