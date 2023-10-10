const express=require('express')
const router=express.Router()
const {getAllStudent}=require('./backend/controllers/student')
const {getOneStudent}=require('./backend/controllers/student')
const {getStudentByClass}=require('./backend/controllers/student')
const {createStudent}=require('./backend/controllers/student')
const {updateStudent}=require('./backend/controllers/student')
const {deleteStudent}=require('./backend/controllers/student')


router.get('/getAll', getAllStudent)
router.get('/getOne/:id',getOneStudent )
router.get("/getByClass/:class_id",getStudentByClass)
router.post('/create',createStudent);
router.put('/update/:id',updateStudent);
router.delete('/delete/:id',deleteStudent)


module.exports=router;