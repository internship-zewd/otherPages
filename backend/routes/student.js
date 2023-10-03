const express=require('express')
const router=express.Router()
const {getAllStudent}=require('../controllers/student')
const {getOneStudent}=require('../controllers/student')
const {getStudentByClass}=require('../controllers/student')
const {createStudent}=require('../controllers/student')
const {updateStudent}=require('../controllers/student')
const {deleteStudent}=require('../controllers/student')


router.get('/getAll', getAllStudent)
router.get('/getOne/:id',getOneStudent )
router.get("/getByClass/:class_id",getStudentByClass)
router.post('/create',createStudent);
router.put('/update/:id',updateStudent);
router.delete('/delete/:id',deleteStudent)


module.exports=router;