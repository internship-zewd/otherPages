const bodyParser = require('body-parser')

const db=require('./models')
const express=require('express')
const cors= require('cors')
const app= express();
PORT=8081

const corsOptions={
    origin:'http://localhost:3001'
}
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());


const studentRoute=require('./routes/student')
app.use('/student',studentRoute)
PORT=8081
const instructorRoute=require('./routes/instructor')
app.use(`/instructor`,instructorRoute)

const adminRoute=require("./routes/admin")
app.use('/admin',adminRoute)


const courseRoute=require('./routes/course')
app.use('/course',courseRoute)

const classRoute=require("./routes/classes")
app.use('/classes',classRoute)


db.sequelize.sync({alter:true}).then((req)=>{
    app.listen(PORT,()=>{
        console.log(`app is listening on ${PORT}`)
    })} 
) 

// {alter:true}

