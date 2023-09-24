const express=require('express')
const router=express.Router()
const {student}=require('../models')


router.get('/', (req,res)=>{
    student.findAll()
    .then(( student)=>{res.send( student)
       
    console.log( student)})
    .catch((err)=>{
        if(err){
            console.log(err);

        } 
    }); 
   

})
router.get('/:id', (req,res)=>{
    const stud_id=req.params.id
    student.findOne({where:{id:stud_id}})
    .then(( student)=>{
    res.json( student)})
    .catch((err)=>{
        if(err){
            console.log(err);

        } 
    }); 
   

})





router.post('/',(req,res)=>{
    student.create({
        username : req.body.username,
     email : req.body.email,
     phonenumber : req.body.phonenumber,
     gender : req.body.gender,
     paymentStatus : req.body.paymentStatus,
     admission_date : req.body.admissionDate,
     course : req.body.course,
     classs : req.body.classs,
     dob : req.body.dob,
     registno : req.body.registno,
        
    })
    .then(console.log(res)
        )
    .catch((err)=>{
        if(err){
            console.log(err)
        }})
        res.send('insert');
});





router.put('/:id',(req,res)=>{
    
    
    student.update(
        {
            username : req.body.username,
            email : req.body.email,
            phonenumber : req.body.phonenumber,
            gender : req.body.gender,
            paymentStatus : req.body.paymentStatus,
            admission_date : req.body.admissionDate,
            course : req.body.course,
            classs : req.body.classs,
            dob : req.body.dob,
            registno : req.body.registno
        },

       { where:{id:req.params.id}})
    .then(( student)=>{
        console.log( student)
        console.log(req.params.id)
    })
    .catch(err=>{
        if(err)
        {console.log(err)}
    })})





router.delete('/:id',(req,res)=>{
    const stud_id=req.params.id
    student.destroy({where:{id:`${stud_id}`}})       
    .then(res.send())
    .catch((err)=>{
        if(err){
            console.log(err)
        }
    })
    

})


module.exports=router;