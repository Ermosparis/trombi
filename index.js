const express= require('express');
const path = require ('path');
const router = require('./app/router');
require ('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"./views"));

app.use(express.static(path.join(__dirname,'public')));
// app.use(express.json());
// app.use(express.urlencoded());

app.use(router);

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})


