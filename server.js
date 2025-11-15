const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");


const app = express();
app.use(cors());
app.use(express.json());


connectDB();


app.use("/api/games", require("./routes/gameRoutes"));
app.use("/api/reviews", require("./routes/reviewRoutes"));


app.listen(process.env.PORT, () =>
console.log(`Servidor funcionando en puerto ${process.env.PORT}`)
);