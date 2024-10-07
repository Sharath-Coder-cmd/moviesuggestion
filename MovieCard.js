import React from 'react';
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
 
  return (
    
    <div className="card mb-2" style={{ width: '11rem', border: '1px solid black' }}>
      
      <Link to={`/movies/${movie._id}`}>
        <img 
          src={movie.poster} 
          className="card-img-top img-fluid" 
          style={{ height: '210px', width: '175px' }} 
          alt={movie.title}
        />
      </Link>

      <div className="card-body" id="detail">
       
       <strong>{movie.title}</strong> 
        <br />
        <span>
          <label style={{ fontSize: 'large', color: 'yellow' }} className="me-1">★</label>
          <label>{movie.imdb_rating}/10</label>
        </span>
        <br />
        <p className="badge bg-primary mb-0 mt-1">{movie.genres[0]}</p><br/>
        <p className="badge bg-danger mb-0 mt-1">{movie.genres[1]}</p><br/>
        <p className="badge bg-info mb-0 mt-1">{movie.genres[2]}</p><br/>
       
        
      </div>
      
    </div>
  );
};

export default MovieCard;
