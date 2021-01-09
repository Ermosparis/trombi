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
    const promos=await client.query(`SELECT * FROM "promo" ORDER BY name`);
    return promos;
}

exports.getStudentsList=async(id)=>{
    const promoStudents = await client.query('SELECT * FROM student WHERE promo_id=$1 ORDER BY last_name',[id]);
    const promoName = await client.query('SELECT name FROM promo WHERE id=$1',[id]);
    return [promoStudents,promoName];
}

