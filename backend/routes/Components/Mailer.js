const nodeMailer=require('nodemailer')
require ('dotenv').config()

const html=`
<h1> Hello worrld </h1>
<p>Isnt nodemailer usefule</p>
`
const Mailer=async(email)=>{
   const transporter=nodeMailer.createTransport({
    service:'gmail',
    secure:true,
    auth:{
        user:process.env.USER,
        pass:process.env.PASSWORD
    }
})

const mailOptions={
    from:`Jalal Addisu <jayaddisu@gmail.com>`,
    to:email,
    subject:"This sumn bout your email ehm",
    html:html,


}

transporter.sendMail(mailOptions,function(error,info){
    if(error){console.log(error)}
    else(console.log("Message sent:" +info.reponse))
})

}

module.exports=Mailer