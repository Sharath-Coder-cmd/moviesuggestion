import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const MovieCards = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Added state for error handling
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null); // Reset error state on new fetch
      const keyword = searchParams.get("keyword"); // Get the search keyword
      const genre = searchParams.get("genre"); // Get the genre from URL

      try {
        let res;
        if (keyword) {
          res = await axios.get(`http://localhost:8000/api/movies?keyword=${keyword}`);
        } else if (genre) {
          // Fetch movies by genre
          res = await axios.get(`http://localhost:8000/api/movies?genre=${genre}`);
        } else {
          // Fetch all movies if no filters are applied
          res = await axios.get(`http://localhost:8000/api/movies`);
        }

        setMovies(res.data); // Update the state with the fetched movies
      } catch (error) {
        console.error("Error fetching movie data:", error);
        setError("Failed to fetch movie data. Please try again."); // Set error message
      } finally {
        setLoading(false); // Turn off loading state
      }
    };

    fetchMovies(); // Fetch movies whenever searchParams change
  }, [searchParams]);

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (error) {
    return <div>{error}</div>; // Display error message if fetching fails
  }

  return (
    <div className="container ms-5 mt-2">
      <div className="row">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div 
              key={movie._id} 
              className="col-11 col-md-3 col-sm-6 col-lg-3 d-flex justify-content-between justify-content-md-center"
            >
              <MovieCard movie={movie} />
            </div>
          ))
        ) : (
          <div>No movies found.</div> 
        )}
      </div>
    </div>
  );
};

export default MovieCards;
