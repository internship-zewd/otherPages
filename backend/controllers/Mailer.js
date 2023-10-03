const nodeMailer=require('nodemailer')
require('dotenv').config()

const html=`
 Hello world 
Isnt nodemailer useful
`
function Mailer(email){
   const transporter=nodeMailer.createTransport({
    service:'gmail',
    secure:true,
    port:465,
    auth:{
        user:process.env.USER,
        pass:process.env.PASS,
    }
})

const mailOptions={
    from:`Jalal Addisu <jayaddisu@gmail.com>`,
    to:email,
    subject:"This sumn bout your email ehm",
    text:html


}

transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error)}
    else(console.log("Message sent: " +info.reponse))
})


}
module.exports= {Mailer}