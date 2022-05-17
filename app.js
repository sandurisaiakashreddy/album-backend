console.log("app.js - start");

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express();
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.listen(8082)
console.log("server started on 8082");
