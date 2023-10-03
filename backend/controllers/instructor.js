const {instructor}=require('../models')
const Mailer=require('../controllers/Mailer')

const getAllInstructor=(req,res)=>{
    
    
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
   

}

const getOneInstructor=(req,res)=>{
   
    const ins_id=req.params.id
    instructor.findOne({where:{id:ins_id}})
    .then((instructor)=>{
        

        value=instructor.dataValues
        const name=value.full_name.split(" ")
        value.first_name=name[0]
        value.middle_name=name[1]
        value.last_name=name[2]
        value.employee_type="instructor"

        console.log(instructor)
    res.send(value)

})
    .catch((err)=>{
        if(err){
            console.log(err);

        } 
    });}

const createInstructor=async (req,res)=>{
    const userEmail=req.body.email
    const {firstName,middleName,lastName,email,password,phone,salary,date}=req.body
    const previousId=await instructor.max('id');
    const idTagValue=previousId!==null?`INS${1000+previousId}`:`INS${1000}`
    const fullName=firstName+" "+middleName+" "+lastName
    const fullIdentification=idTagValue+" "+fullName
       
    instructor.create({

        id_tag:idTagValue,
        full_name:fullName,
        full_identification:fullIdentification,
        email:email,
        password:password,
        phone:phone,
        salary:salary,

    })
    .then(res.send()
        // ()=>{if(res.status===200){console.log(Mailer(userEmail))}}
    )

    .catch((err)=>{
        if(err){
            console.log(err)
        }})
       
}

const updateInstructor=async (req,res)=>{
    const {firstName,middleName,lastName,email,password,phone,salary,date}=req.body;
    const previousId=await instructor.max('id');
    const idTagValue=previousId!==null?`INS${1000+previousId}`:`INS${1000}`
    const fullName=firstName+" "+middleName+" "+lastName
    const fullIdentification=idTagValue+" "+fullName

    
    instructor.update(
        {
            
        id_tag:idTagValue,
        full_name:fullName,
        full_identification:fullIdentification,
        email:email,
        password:password,
        phone:phone,
        salary:salary,
    },

       { where:{id:req.params.id}})
    .then((instructors)=>{
        console.log(instructors)
        console.log(req.params.id)
    })
    .catch(err=>{
        if(err)
        {console.log(err)}
    })}


    const deleteInstructor=(req,res)=>{
    
        const ins_id=req.params.id
        instructor.destroy({where:{id:ins_id}})       
        .then(res.send())
        .catch((err)=>{
            if(err){
                console.log(err)
            }
        })
        
    
    }

module.exports={
    getAllInstructor,
    getOneInstructor,
    createInstructor,
    updateInstructor,
    deleteInstructor
}


