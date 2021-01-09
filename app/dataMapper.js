const client = require("./db")

//    WORKING CODE with callback

// exports.getPromos = (callback) => {
//     client.query(`SELECT * FROM "promo"`, (error, result) => {
//         if (error) {
//             console.trace(error);
//             callback();
//         }
//         else callback(result.rows);
//     });
// }

//    WORKING CODE

    
exports.getPromos=async()=>{
    try {
        const promos=await client.query(`SELECT * FROM "promo" ORDER BY name`);
        return promos;
    } catch (error) {
        console.error(error)
    }
}

