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

// app.get('/student', async (req, res) => {
//     try {
//       // Fetch all student records from the database
//       const students = await student.findAll();
  
//       // Display the student data in a table format
//       let table = '<table>';
//       table += '<tr><th>Name</th><th>Email</th><th>Course</th></tr>';
//       students.forEach((student) => {
//         table += `<tr><td>${student.username}</td><td>${student.email}</td><td>${student.course}</td></tr>`;
//       });
//       table += '</table>';
  
//       res.send(table);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Internal Server Error');
//     }
//   });

//   app.get('/get', (req,res)=>{
//     student.findAll()
//     .then((students)=>{res.json(students)
       
//     console.log(students)})
//     .catch((err)=>{
//         if(err){
//             console.log(err);

//         } 
//     }); 
//     res.send('get')

// })


PORT=8081
const instructorRoute=require('./routes/instructor')
app.use('/instructor',instructorRoute)

// app.get('/get', (req,res)=>{
//     instructor.findAll()
//     .then((instructors)=>{res.json(instructors)
       
//     console.log(instructors)})
//     .catch((err)=>{
//         if(err){
//             console.log(err);

//         } 
//     }); 
//     res.send('get')

// })

// app.get('/instructor', async (req, res) => {
//     try {
//       // Fetch all employee records from the database
//       const instructor = await instructor.findAll();
  
//       // Display the employee data in a table format
//       let table = '<table>';
//       table += '<tr><th>Reg No.</th><th>Employee Name</th><th>Type</th></tr>';
//      instructor.forEach((instructor) => {
//         table += `<tr><td>${instructor.regNum}</td><td> ${instructor.first_name} ${instructor.middle_name} ${instructor.last_name}</td><td>${instructor.employeeType}</td></tr>`;
//       });
//       table += '</table>';
  
//       res.send(table);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Internal Server Error');
//     }
//   });





db.sequelize.sync().then((req)=>{
    app.listen(PORT,()=>{
        console.log(`app is listening on ${PORT}`)
    })

  
} 
) 