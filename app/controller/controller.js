const dataMapper = require("../dataMapper")
const { check, validationResult } = require('express-validator');


exports.index = (req, res) => {
    res.render("index");
}

exports.showAddStudentForm = async (req, res) => {
    try {
        const promos= (await dataMapper.getPromos()).rows
        res.render("./admin/addStudent",{promos});
    } catch (error) {
        console.error(error)
    }
}

exports.promosList = async (req,res,next)=>{
    try {
        const promos= (await dataMapper.getPromos()).rows
        res.render("./promo/promos", { promos});
    } catch (error) {
        console.error(error)
        next()
    }
}

exports.getStudents = async(req,res,next)=>{
    const { id } = req.params;
    try {
        const data= await dataMapper.getStudentsList(id);
        const promoStudents=data[0].rows;
        const promoName=data[1].rows[0].name.toUpperCase();
        res.render("./promo/studentslist", {promoStudents,promoName});
    } catch (error) {
        console.error(error)
        next()   
    }
}

exports.validateInput=[
    check('first_name')
        .isAlpha()
        .withMessage('Must be only alphabetical chars')
        .isLength({ min: 2 })
        .withMessage('Must be at least 2 chars long')
        .trim()
        .escape(),
    check('last_name')
        .isAlpha()
        .withMessage('Must be only alphabetical chars')
        .isLength({ min: 2 })
        .withMessage('Must be at least 2 chars long')
        .trim()
        .escape(),
    check('github_username')
        .isAlpha()
        .withMessage('Must be only alphabetical chars')
        .isLength({ min: 2 })
        .withMessage('Must be at least 2 chars long')
        .trim()
        .escape(),
]

exports.addStudent = async(req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array()})
    } else{
        const promo_id=req.body.promo;
        const prenom=req.body.first_name;
        const nom=req.body.last_name;
        const gitPseudo=req.body.github_username;
    try {
        await dataMapper.addStudent(promo_id,prenom,nom,gitPseudo);
        res.redirect(`/promos/${promo_id}`);
    } catch (error) {
        console.error(error)
    }
  }
}