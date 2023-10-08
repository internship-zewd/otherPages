const express=require("express")
const router=express.Router()
const {allEmployees,getAllMembers,sendSpecific,allInstructors,allManagers,allStudents,allAccountants,allMembers}=require("../controllers/message")
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname); // Use the original filename for the uploaded file
    },
  });
  const upload = multer({ storage });


router.post("/create/allEmployees",upload.single('attachment'),allEmployees);
router.post("/create/allInstructors",upload.single("attachment"),allInstructors)
router.post("/create/allManagers",upload.single("attachment"),allManagers)
router.post("/create/allStudents",upload.single("attachment"),allStudents)
router.post("/create/allAccountants",upload.single("attachment"),allAccountants)
router.post("/create/all",upload.single("attachment"),allMembers)
router.get("/getAll",getAllMembers)
router.post("/specific",upload.single("attachment"),sendSpecific)

module.exports=router

