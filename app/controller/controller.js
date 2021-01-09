const dataMapper = require("../dataMapper")


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