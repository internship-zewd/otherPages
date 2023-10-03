const express=require('express')
const router=express.Router()
const {getAllAdmins}=require('../controllers/admin')
const {getOneAdmin}=require('../controllers/admin')
const {createAdmin}=require('../controllers/admin')
const {updateAdmin}=require('../controllers/admin')
const {deleteAdmin}=require('../controllers/admin')

router.get('/getAll', getAllAdmins);
router.get('/getOne/:id',getOneAdmin)
router.post('/create',createAdmin);
router.put('/update/:id',updateAdmin)
router.delete('/delete/:id',deleteAdmin)


module.exports=router;
