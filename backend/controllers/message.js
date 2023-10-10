const {Mailer}=require('./Mailer')
const {manager,student,accountant,instructor,admin}=require("../models")
const allEmployees=async(req,res)=>{

    console.log(req.body)
    const {title,message}=req.body.messageInfo
    const attachment=req.attachment
    let members=[]
members.push(await manager.findAll())
members.push(await accountant.findAll()) 
members.push(await instructor.findAll())
members.push(await admin.findAll())

Promise.all(members)
.then((employees)=>{
    let sendEmployees=[]
    let employeeEmail=[]
    employees.forEach((array1)=>{
        array1.forEach((employee)=>{
    sendEmployees.push(employee)
    employeeEmail.push(employee.email)
    
        })
    })
    console.log(employeeEmail)
    console.log(attachment)

console.log(sendEmployees)
Mailer(employeeEmail,title,message,attachment)
}).catch((err)=>{if(err){console.log(err)}})
}




const getAllMembers=async(req,res)=>{
    let members=[]
    members.push(await manager.findAll())
    members.push(await student.findAll())
    members.push(await admin.findAll())
    members.push(await accountant.findAll())
    members.push(await instructor.findAll())

    Promise.all(members)
    .then((allMembers)=>{
        let member =[]
        allMembers.forEach((array1)=>{
            array1.forEach((memberInfo)=>{
                
                tableName=memberInfo.constructor.getTableName()
                memberInfo.dataValues.member_type=tableName
                console.log("this is the table name :"+ tableName)
                member.push(memberInfo)
            })

        })

        res.send(allMembers)
        console.log(allMembers)
    })
    .catch((err)=>{
        if(err){console.log(err)}
    })

}



const allMembers=async(req,res)=>{
    
    console.log(req.body)
    const {title,message}=req.body.messageInfo
    const attachment=req.attachment
    let members=[]
members.push(await manager.findAll())
members.push(await accountant.findAll()) 
members.push(await manager.findAll())
members.push(await admin.findAll())
members.push(await student.findAll())

Promise.all(members)
.then((employees)=>{
    let sendEmployees=[]
    let employeeEmail=[]
    employees.forEach((array1)=>{
        array1.forEach((employee)=>{
    sendEmployees.push(employee)
    employeeEmail.push(employee.email)
    
        })
    })
    console.log(employeeEmail)
    console.log(attachment)

console.log(sendEmployees)
Mailer(employeeEmail,title,message,attachment)
}).catch((err)=>{if(err){console.log(err)}


})}



const allInstructors=async(req,res)=>{

    const {title,message}=req.body.messageInfo
    const attachment=req.attachment
    await instructor.findAll()
    .then((instructors)=>{
        let emails=[]
        instructors.forEach((instructor)=>{
           emails.push(instructors.dataValues.email)
            
        })
        console.log(emails)

        Mailer(emails,title,message,attachment)
    })
    .catch((err)=>{if(err){res.send(err)}})}








    const allManagers=async(req,res)=>{

        const {title,message}=req.body.messageInfo
        const attachment=req.attachment
        await manager.findAll()
        .then((managers)=>{
            let emails=[]
            managers.forEach((manager)=>{
               emails.push( manager.dataValues.email)
                
            })
            console.log(emails)
    
            Mailer(emails,title,message,attachment)
        })
        .catch((err)=>{if(err){res.send(err)}})}





        const allStudents=async(req,res)=>{

            const {title,message}=req.body.messageInfo
            const attachment=req.attachment
            await student.findAll()
            .then((students)=>{
                let emails=[]
                students.forEach((student)=>{
                   emails.push( student.dataValues.email)
                    
                })
                console.log(emails)
        
                Mailer(emails,title,message,attachment)
            })
            .catch((err)=>{if(err){res.send(err)}})}







            const allAccountants=async(req,res)=>{

                const {title,message}=req.body.messageInfo
                const attachment=req.attachment
                await accountant.findAll()
                .then((accountants)=>{
                    let emails=[]
                    accountants.forEach((accountant)=>{
                       emails.push(accountant.dataValues.email)
                        
                    })
                    console.log(emails)
            
                    Mailer(emails,title,message,attachment)
                })
                .catch((err)=>{if(err){res.send(err)}})}











                const allAdmins=async(req,res)=>{

                    const {title,message}=req.body.messageInfo
                    const attachment=req.attachment
                    await admin.findAll()
                    .then((admins)=>{
                        let emails=[]
                        admins.forEach((admin)=>{
                           emails.push(admin.dataValues.email)
                            
                        })
                        console.log(emails)
                
                        Mailer(emails,title,message,attachment)
                    })
                    .catch((err)=>{if(err){res.send(err)}})}
    

        


        







const sendSpecific=(req,res)=>{

    const {emails,attachment}=req.body
    const {title,message}=req.body.messageInfo
    Mailer(emails,title,message,attachment)
   
}







module.exports={
    allEmployees,
    getAllMembers,
    sendSpecific,
    allInstructors,
    allManagers,
    allStudents,
    allAccountants,
    allAdmins,
    allMembers,
}