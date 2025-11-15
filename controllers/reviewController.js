const Review = require("../models/review");


exports.getReviews = async (req, res) => {
const reviews = await Review.find({ juegoId: req.params.juegoId });
res.json(reviews);
};


exports.addReview = async (req, res) => {
const newReview = await Review.create(req.body);
res.json(newReview);
};


exports.updateReview = async (req, res) => {
const updated = await Review.findByIdAndUpdate(req.params.id, req.body, {
new: true,
});
res.json(updated);
};


exports.deleteReview = async (req, res) => {
await Review.findByIdAndDelete(req.params.id);
res.json({ message: "Reseña eliminada" });
};