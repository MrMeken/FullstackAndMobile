const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(express.json());  //why????? KKKKKKKKKKKKKKKKKKK forgot the parenthesis
app.use(routes);
app.use(cors());


app.listen(3333);