const express = require("express");
const cors = require("cors");
const {funcTest} = require("../controller/controllTest")
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.get("/api/debug",funcTest);


export {app}

