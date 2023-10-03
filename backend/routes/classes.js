const express=require('express')
const router=express.Router()
const {classes}=require('../models')


router.get('/', (req,res)=>{
    classes.findAll()
    .then(( classes)=>{res.send( classes)
       
    console.log( classes)})
    .catch((err)=>{
        if(err){
            console.log(err);

        } 
    }); 
   

})
router.get('/:id', (req,res)=>{
    const id=req.params.id
    classes.findOne({where:{id:classes}})
    .then(( classes)=>{
    res.json( classes)})
    .catch((err)=>{
        if(err){
            console.log(err);

        } 
    }); 
   

})





router.post('/',(req,res)=>{
    classes.create({
     classes_name : req.body.classesName,
     course : req.body.course,
     instructor : req.body.instructor,
     
     
        
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
    
    
    classes.update(
        {
            classes_name : req.body.classes,
            course : req.body.course,
            instructor : req.body.instructor,
     
        },

       { where:{id:req.params.id}})
    .then(( classes)=>{
        console.log( classes)
        console.log(req.params.id)
    })
    .catch(err=>{
        if(err)
        {console.log(err)}
    })})


router.delete('/:id',(req,res)=>{
    const id=req.params.id
    classes.destroy({where:{id:`${id}`}})       
    .then(res.send())
    .catch((err)=>{
        if(err){
            console.log(err)
        }
    })
    

})


module.exports=router;