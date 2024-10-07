const express = require("express");
const router = express.Router();
const Movie = require("../Models/Movie");
const Genre = require("../Models/Genre");

// Search by keyword and genre name
router.get("/", async (req, res) => {
    const keyword = req.query.keyword ? {
        title: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {};

    const genre = req.query.genre ? {
        genres: {
            $regex: req.query.genre,
            $options: 'i'
        }
    } : {};

    // Get movies based on keyword and genre IDs
    try {
        const movies = await Movie.find({
            ...keyword,
            ...genre // Filter by genre IDs
        });

        res.json(movies); // Return filtered movies
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a single movie by ID
router.get("/:id", async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: "Movie Not Found" });
        } else {
            res.json(movie);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
