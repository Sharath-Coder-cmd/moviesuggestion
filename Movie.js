const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    imdb_rating: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    },
    genres: [
        {
            type: String  // Reference to Genre model
            
        }
    ],
    genreIds: [  
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Genre'  
        }
    ],
    poster: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    }
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
