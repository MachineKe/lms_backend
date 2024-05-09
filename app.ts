const cors = require('cors');
const cookieParser = require("cookieparser");
const express = require("express") 
const app = express();
module.exports = app;


app.use(express.json({limit: "50mb"}))