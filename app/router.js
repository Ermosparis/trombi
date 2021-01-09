const router = require('express').Router();
const controller = require("./controller/controller");

router.get('/',controller.index)
router.get('/admin/student/add',controller.showAddStudentForm)

router.get('/promos',controller.promosList)
router.get('/promos/:id',controller.getStudents)

router.post('/admin/student/add',controller.validateInput,controller.addStudent)



module.exports=router;