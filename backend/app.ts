const express = require("express");
const cors = require("cors");
let app = express();

const PORT = 5000; //temporal para prueba basica retirar después

const pollsController = require("./controllers/pollsController.ts");

app.use(cors());

app.get("/polls", pollsController.pollResultsFetch);

app.listen(PORT, () => console.log("Listening on Port:", PORT));
