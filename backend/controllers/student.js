const {student,classs}=require('../models')

const getAllStudent=(req,res)=>{
    student.findAll()
    .then(( student)=>{res.send(student)
       
    console.log( student)})
    .catch((err)=>{
        if(err){
            console.log(err);

        } 
    }); 
   

}

const getOneStudent=(req,res)=>{
    const id=req.params.id
    student.findOne({where:{id:id}})
    .then(res.send())
    .catch((err)=>{
        if(err){
            console.log(err)
        }
    })}

const getStudentByClass=async(req,res)=>{
    const class_id=req.params.class_id
    await student.findAll({where:{class_id:class_id}})
    .then((students)=>{
        res.send(students)
        console.log(students)

    })
    .catch((err)=>{
        if(err){
            console.log(err)
        }
    })}


const createStudent=async(req,res)=>{
    const {firstName,middleName,lastName,email,phonenumber,gender,course,classs,paymentStatus,dob}=req.body
    const fullName=firstName+" "+middleName+" "+lastName
    
    const previousId= await admin.max('id')
    const idTagValue= previousId!==null? `ADM${1000+previousId}`:`ADM${1000}`
    const fullIdentification=idTagValue+" "+fullName
    // Mailer(email)
    student.create({
        
    
        id_tag:idTagValue,
        full_name:fullName,
        full_identification:fullIdentification,
        email:email,
         phonenumber :phonenumber,
         gender : gender,
         course : course,
         paymentStatus : paymentStatus,
         dob : dob,
        
            
        })
        .then(console.log(res)
            )
        .catch((err)=>{
            if(err){
                console.log(err)
            }})
            res.send('insert');
    }


const updateStudent=(req,res)=>{
    
    
    student.update(
        {
            
            email : req.body.email,
            phonenumber : req.body.phonenumber,
            gender : req.body.gender,
            paymentStatus : req.body.paymentStatus,
            course : req.body.course,
            dob : req.body.dob,
        },

       { where:{id:req.params.id}})
    .then(( student)=>{
        console.log( student)
        console.log(req.params.id)
    })
    .catch(err=>{
        if(err)
        {console.log(err)}
    })}

const deleteStudent=(req,res)=>{
    const stud_id=req.params.id
    student.destroy({where:{id:stud_id}})       
    .then(res.send())
    .catch((err)=>{
        if(err){
            console.log(err)
        }
    })}


    const getStudentAndClass=(req,res)=>{
        let studentByClass=[]
        student.findAll()
        .then((student)=>{


        })

    }

module.exports={
    getAllStudent,
    getOneStudent,
    createStudent,
    updateStudent,
    getStudentByClass,
    deleteStudent,
    getStudentAndClass
}


