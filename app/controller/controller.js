const dataMapper = require("../dataMapper")


exports.index = (req, res) => {
    res.render("index");
}

//    WORKING CODE

// exports.promos = (req, res) => {
//       dataMapper.getPromos((promos) => {
//     if (!promos) next();
//     else res.render("promos", { promos });
//   });
// }

//    WORKING CODE

exports.promosList = async (req,res)=>{
    const promos= (await dataMapper.getPromos()).rows
    res.render("promos", { promos});
}