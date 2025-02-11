// Team => Teams
const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    year: { type: Number, required: true },
    runtime: { type: Number },
    released: { type: Date },
    poster: { type: String },
    plot: { type: String },
    fullplot: { type: String },
    lastupdated: { type: String },
    type: { type: String },
    directors: { type: [String], required: true },
    imdb: { type: Object },
    cast: { type: [String] },
    countries: { type: [String] },
    genres: { type: [String] },
    tomatoes: { type: Object },
    num_mflix_comments: { type: Number },

})
const Movie = mongoose.model("Movies" , movieSchema);
module.exports = Movie ;