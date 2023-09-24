const bodyParser = require('body-parser')
const {student}=require('./models')
const db=require('./models')
const express=require('express')
const cors=require('cors')
const app= express();
const corsOptions={
    origin:'http://localhost:3000'
}


app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

PORT=8081
const studentRoute=require('./routes/student')
app.use('/student',studentRoute)

const instructorRoute=require('./routes/instructor')
app.use('/instructor',instructorRoute)


const courseRoute=require('./routes/course')
app.use('/course',courseRoute)


db.sequelize.sync().then((req)=>{
    app.listen(PORT,()=>{
        console.log(`app is listening on ${PORT}`)
    })} 
) 