const client = require("./db")

    
exports.getPromos=async()=>{
    const promos=await client.query(`SELECT * FROM "promo" ORDER BY name`);
    return promos;
}

exports.getStudentsList=async(id)=>{
    const promoStudents = await client.query('SELECT * FROM student WHERE promo_id=$1 ORDER BY last_name',[id]);
    const promoName = await client.query('SELECT name FROM promo WHERE id=$1',[id]);
    return [promoStudents,promoName];
}

exports.addStudent=async(id,prenom,nom,gitPseudo)=>{
    const sqlQueryInsertStudent =`
    INSERT INTO student (promo_id, first_name, last_name, github_username) VALUES
    ($1,$2,$3,$4)`;
    const values=[id,prenom,nom,gitPseudo]
    await client.query(sqlQueryInsertStudent,values)
}

