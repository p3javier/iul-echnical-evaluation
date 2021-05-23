const express = require("express");
const cors = require("cors");
let app = express();

const pollsController = require("./controllers/pollsController.ts");

app.use(cors());

app.get("/polls", pollsController.pollResultsFetch);

module.exports = app;
