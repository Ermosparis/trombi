const router = require('express').Router();
const controller = require("./controller/controller");

router.get('/',controller.index)
router.get('/promos',controller.promosList)
router.get('/promos/:id',controller.getStudents)



module.exports=router;