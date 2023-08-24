
const express=require('express')
const router=express.Router()
const {student}=require('../models')


router.get('/', (req,res)=>{
    student.findAll()
    .then((student)=>{res.send(student)
    console.log(student)})
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
     addmitiondate : req.body.addmitiondate,
     course : req.body.course,
     classs : req.body.classs,
     dob : req.body.dob,
     registno : req.body.registno

    })
    .then(console.log(req.body)
        )
    .catch((err)=>{
        if(err){
            console.log(err)
        }})
        res.send('insert');
});

router.delete('/',(req,res)=>{
    student.destroy(
       {
        where:{id:10}
       }
    )
    .then(res.send(deleted))
    .catch((err)=>{
        if(err){
            console.log(err)
        }
    })
    res.send('delete')

})


module.exports=router;
