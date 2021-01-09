const router = require('express').Router();
const controller = require("./controller/controller");


router.get('/promos',controller.promos)
router.get('/',controller.index)

module.exports=router;