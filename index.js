require ('dotenv').config();
const express= require('express');
const path = require ('path');
const router = require('./app/router');

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"./views"));

app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(router);

app.use(function(req, res, next){
    res.status(404);
    res.render('404')
});

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})


