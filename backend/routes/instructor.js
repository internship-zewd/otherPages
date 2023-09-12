const express=require('express')
const router=express.Router()
const {instructor}=require('../models')
const Mailer=require('./Components/Mailer')


router.get('/', (req,res)=>{
    
    
    instructor.findAll()
    .then((instructors)=>{res.send(instructors)
       
    console.log(instructors)})
    .catch((err)=>{
        if(err){
            console.log(err);

        } 
    }); 
   

})
router.get('/:id', (req,res)=>{
   
    const ins_id=req.params.id
    instructor.findOne({where:{id:ins_id}})
    .then((instructors)=>{
    res.json(instructors)})
    .catch((err)=>{
        if(err){
            console.log(err);

        } 
    }); 
   

})


router.post('/',(req,res)=>{
    const userEmail=req.body.email
       
    instructor.create({
        
        first_name:req.body.firstName,
        middle_name:req.body.middleName,
        last_name:req.body.lastName,
        email:req.body.email,
        password:req.body.password,
        phone:req.body.phone,
        salary:req.body.salary,
        employment_date:req.body.date,
        course:req.body.course,
    
        
    })
    .then(
        ()=>{if(res.status===200){console.log(Mailer(userEmail))}})

    .catch((err)=>{
        if(err){
            console.log(err)
        }})
        res.send('insert');
});

router.put('/:id',(req,res)=>{
    
    
    instructor.update(
        {
        
        first_name:req.body.firstName,
        middle_name:req.body.middleName,
        last_name:req.body.lastName,
        email:req.body.email,
        password:req.body.password,
        phone:req.body.phone,
        salary:req.body.salary,
        employment_date:req.body.date,
        course:req.body.course,
        },

       { where:{id:req.params.id}})
    .then((instructors)=>{
        console.log(instructors)
        console.log(req.params.id)
    })
    .catch(err=>{
        if(err)
        {console.log(err)}
    })})


router.delete('/:id',(req,res)=>{
    
    const ins_id=req.params.id
    instructor.destroy({where:{id:`${ins_id}`}})       
    .then(res.send())
    .catch((err)=>{
        if(err){
            console.log(err)
        }
    })
    

})


module.exports=router;
