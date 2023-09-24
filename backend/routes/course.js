const express=require('express')
const router=express.Router()
const {course}=require('../models')


router.get('/', (req,res)=>{
    course.findAll()
    .then(( course)=>{res.send( course)
       
    console.log( course)})
    .catch((err)=>{
        if(err){
            console.log(err);

        } 
    }); 
   

})
router.get('/:id', (req,res)=>{
    const course_id=req.params.id
    course.findOne({where:{id:course}})
    .then(( course)=>{
    res.json( course)})
    .catch((err)=>{
        if(err){
            console.log(err);

        } 
    }); 
   

})





router.post('/',(req,res)=>{
    course.create({
     course_name : req.body.courseName,
     course_fee : req.body.fee,
     course_duration : req.body.duration
     
        
    })
    .then(console.log(req.body)
        )
    .catch((err)=>{
        if(err){
            console.log(err)
        }})
        res.send('insert');
});

router.put('/:id',(req,res)=>{
    
    
    course.update(
        {
            course_name : req.body.course,
            course_fee : req.body.fee,
            course_duration : req.body.duration,
     
        },

       { where:{id:req.params.id}})
    .then(( course)=>{
        console.log( course)
        console.log(req.params.id)
    })
    .catch(err=>{
        if(err)
        {console.log(err)}
    })})


router.delete('/:id',(req,res)=>{
    const course_id=req.params.id
    course.destroy({where:{id:`${course_id}`}})       
    .then(res.send())
    .catch((err)=>{
        if(err){
            console.log(err)
        }
    })
    

})


module.exports=router;