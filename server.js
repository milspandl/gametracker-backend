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


const PORT = process.env.PORT || 4000;

app.get("/ping", (req, res) => {
  res.send("Servidor activo ✔");
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando en puerto ${PORT}`);
});
