require('dotenv').config({ path: `${__dirname}/.env` });

global.express = require("express");
global.app = express();

const pool = require('./app/adapters/database/postgresql');

// const { router } = require('./app/routes/routes');
//const swagger = require('./app/libs/swagger/autogen');

//Global Variable
global.userIN = null;

app.use(express.json())
//app.set('view engine', 'ejs'); //FOR views Template engine

// app.use(router);



app.get("/ss", (req, res) => {
    res.status(200).send("WHATABYTE: Food For Devs");
});



app.listen(3000, () => console.log(`Server listening on 3000 ${process.env.APP_HOST} `));

