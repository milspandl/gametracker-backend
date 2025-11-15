const mongoose = require("mongoose");


const gameSchema = new mongoose.Schema({
titulo: { type: String, required: true },
genero: { type: String, required: true },
horasJugadas: { type: Number, default: 0 },
completado: { type: Boolean, default: false },
portada: { type: String },
puntuacion: { type: Number, min: 1, max: 5 },
});


module.exports = mongoose.model("Game", gameSchema);