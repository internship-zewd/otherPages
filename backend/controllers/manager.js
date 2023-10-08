const {manager}=require('../models')
const Mailer=require('./Mailer')

const getAllManager=(req,res)=>{
    
    
    manager.findAll()
    .then((managers)=>{

let managerValues=[]

        managers.map((manager)=>{
            let values=manager.dataValues
            values.employee_type='manager'
            managerValues.push(values)
        })
        
        
        
        res.send(managerValues)
       
    console.log(managerValues)})
    .catch((err)=>{
        if(err){
            console.log(err);

        } 
    }); 
   

}

const getOneManager=(req,res)=>{
   
    const acc_id=req.params.id
    manager.findOne({where:{id:acc_id}})
    .then((manager)=>{
        

        value=manager.dataValues
        const name=value.full_name.split(" ")
        value.first_name=name[0]
        value.middle_name=name[1]
        value.last_name=name[2]
        value.employee_type="manager"

        console.log(manager)
    res.send(value)

})
    .catch((err)=>{
        if(err){
            console.log(err);

        } 
    });}

const createManager=async (req,res)=>{
    const userEmail=req.body.email
    const {firstName,middleName,lastName,email,password,phone,salary}=req.body
    const previousId=await manager.max('id');
    const idTag=previousId!==null?`MAN${1000+previousId}`:`MAN${1000}`
    const fullName=firstName+" "+middleName+" "+lastName
    const fullIdentification=idTag+" "+fullName


    
    manager.create({

        id_tag:idTag,
        full_name:fullName,
        full_identification:fullIdentification,
        email:email,
        password:password,
        phone:phone,
        salary:salary,

    })
    .then(res.send()
    )

    .catch((err)=>{
        if(err){
            console.log(err)
        }})
       
}

const updateManager=async (req,res)=>{
    const {firstName,middleName,lastName,email,password,phone,salary,fullIdentification}=req.body;
    const identification=fullIdentification.split(" ")
    const fullName=firstName+" "+middleName+" "+lastName
    const full_identification=identification[0]+" "+fullName


    
    manager.update(
        {
            
            full_name:fullName,
            full_identification:full_identification,
            email:email,
            password:password,
            phone:phone,
            salary:salary,
    },

       { where:{id:req.params.id}})
    .then((managers)=>{
        console.log(managers)
        console.log(req.params.id)
    })
    .catch(err=>{
        if(err)
        {console.log(err)}
    })}


    const deleteManager=(req,res)=>{
    
        const acc_id=req.params.id
        manager.destroy({where:{id:acc_id}})       
        .then(res.send())
        .catch((err)=>{
            if(err){
                console.log(err)
            }
        })
        
    
    }

module.exports={
    getAllManager,
    getOneManager,
    createManager,
    updateManager,
    deleteManager
}


