const client = require("./db")

exports.getPromos = async() => { 
    try {
        console.log("hello")
        const promos = await client.query(`SELECT * FROM "promo";`);
        console.log("promos(try)=", promos)      
    } catch (error) {
        console.error("Error(catch)=",error);
    }
};

