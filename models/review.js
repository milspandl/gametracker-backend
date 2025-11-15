const mongoose = require("mongoose");


const reviewSchema = new mongoose.Schema({
juegoId: { type: mongoose.Schema.Types.ObjectId, ref: "Game" },
texto: { type: String, required: true },
estrellas: { type: Number, min: 1, max: 5 },
});


module.exports = mongoose.model("Review", reviewSchema);