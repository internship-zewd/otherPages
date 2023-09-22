const express=require('express')
const router=express.Router()
const {instructor}=require('../models')
const Mailer=require('./Components/Mailer')


router.get('/', (req,res)=>{
    
    
    instructor.findAll()
    .then((instructors)=>{

let instructorValues=[]

        instructors.map((instructor)=>{
            let values=instructor.dataValues
            values.employee_type='instructor'
            instructorValues.push(values)
        })
        
        
        
        res.send(instructorValues)
       
    console.log(instructorValues)})
    .catch((err)=>{
        if(err){
            console.log(err);

        } 
    }); 
   

})
router.get('/:id', (req,res)=>{
   
    const ins_id=req.params.id
    instructor.findOne({where:{id:ins_id}})
    .then((instructor)=>{
        

        value=instructor.dataValues
        value.employee_type="instructor"

        console.log(instructor)
    res.send(value)

})
    .catch((err)=>{
        if(err){
            console.log(err);

        } 
    }); 
   

})


router.post('/',async (req,res)=>{
    const userEmail=req.body.email
    const {firstName,middleName,lastName,email,password,phone,salary,date}=req.body
    const previousId=await instructor.max('id');
    const idTagValue=previousId!==null?`INS${1000+previousId}`:`INS${1000}`
       
    instructor.create({
        id_tag:idTagValue,
        
        first_name:firstName,
        middle_name:middleName,
        last_name:lastName,
        email:email,
        password:password,
        phone:phone,
        salary:salary,
        employment_date:date,
        
    
        
    })
    .then(res.send()
        // ()=>{if(res.status===200){console.log(Mailer(userEmail))}}
    )

    .catch((err)=>{
        if(err){
            console.log(err)
        }})
       
});

router.put('/:id',async (req,res)=>{
    const {firstName,middleName,lastName,email,password,phone,salary,date}=req.body;
    const previousId=await instructor.max('id');
    const idTagValue=previousId!==null?`INS${1000+previousId}`:`INS${1000}`
    
    instructor.update(
        {
            id_tag:idTagValue,

        first_name:firstName,
        middle_name:middleName,
        last_name:lastName,
        email:email,
        password:password,
        phone:phone,
        salary:salary,
        employment_date:date,
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
