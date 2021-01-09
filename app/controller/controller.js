const dataMapper = require("../dataMapper")
const client = require("../db")


exports.index = (req, res) => {
    res.render("index");
}

exports.promos = async (res, req, next) => {
    const promos= await client.query(`SELECT * FROM "promo"`);
    res.render("promos",{promos})
}
