const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/", routes);

app.listen(3001, "192.168.1.68", () => {
    console.log("Servindo na porta 3001!");
});