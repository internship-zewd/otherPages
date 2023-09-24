const express=require('express')
const router=express.Router()
const {admin}=require('../models')
const Mailer=require('./Components/Mailer')


router.get('/', (req, res) => {
    let adminValues=[]
    admin.findAll()
      .then((admins) => {
        
        admins.map((admin)=>{
    let values=admin.dataValues
    values.employee_type="admin"
    adminValues.push(values)
        })
        console.log(adminValues)
        res.send(adminValues)
      })
      .catch((err) => {
        console.log(err);
      });
  });


router.get('/:id', (req,res)=>{

   
    const admin_id=req.params.id
    admin.findOne({where:{id:admin_id}})

    .then((admin)=>{

        let value=admin.dataValues
        const name=value.full_name.split(" ")
        value.first_name=name[0]
        value.middle_name=name[1]
        value.last_name=name[2]
        value.employee_type="admin"

        
console.log(value)
    res.send(value)})
    .catch((err)=>{
        if(err){
            console.log(err);

        } 
    }); 
   

})


router.post('/',async (req,res)=>{
    const {firstName,middleName,lastName,email,password,phone,salary,date}=req.body
    const fullName=firstName+" "+middleName+" "+lastName
  
    const previousId= await admin.max('id')
const idTagValue= previousId!==null? `ADM${1000+previousId}`:`ADM${1000}`
const fullIdentification=idTagValue+" "+fullName
    admin.create({
        

        id_tag:idTagValue,
        full_name:fullName,
        full_identification:fullIdentification,
        email:email,
        password:password,
        phone:phone,
        salary:salary,
        employment_date:date,
       
    
        
    })
    .then(
        res.send()
        // ()=>{if(res.status===200){console.log(Mailer(userEmail))}}
    )

    .catch((err)=>{
        if(err){
            console.log(err)
        }})
});

router.put('/:id',async(req,res)=>{
    console.log("im in admin put")
    const {firstName,middleName,lastName,email,password,phone,salary,date}=req.body
    const fullName=firstName+" "+middleName+" "+lastName
    const previousId=await admin.max('id')
    const idTagValue=previousId!==null?`ADM${1000+previousId}`:`ADM${1000}`
    const fullIdentification=idTagValue+" "+fullName
    admin.update(
        {     
        id_tag:idTagValue,
        full_name:fullName,
        full_identification:fullIdentification,
        email:email,
        password:password,
        phone:phone,
        salary:salary,
        employment_date:date,
        
        },

       { where:{id:req.params.id}})
    .then(res.send())
    .catch(err=>{
        if(err){console.log(err)}
})})


router.delete('/:id',(req,res)=>{
    
    const admin_id=req.params.id
    admin.destroy({where:{id:`${admin_id}`}})       
    .then(res.send())
    .catch((err)=>{
        if(err){
            console.log(err)
        }
    })
    

})


module.exports=router;
