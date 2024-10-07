import "./App1.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const MovieSuggestion = () => {
  const[Card,SetCard]=useState(null)
  const{id}=useParams()
 
  const fetchCard=async ()=>{
    try{
      const response=await axios.get(`http://localhost:8000/api/movies/${id}`)
      SetCard(response.data)
    }
    catch(error){
      console.log(error)
    }
  }
  
  useEffect(()=>{
    fetchCard()
  },[])
 
  if(!Card){
    return <div>Loading...</div>
  }
  return (
    <div >
      
      <div className="row mt-2">
      <div className="col-12 col-md-4 col-sm-10 d-flex justify-content-md-end">
          <div id="movie_card">
          <h3 className="mb-3 ms-2" style={{ color: 'rgb(227, 44, 44)', fontStyle: 'italic' }} id="movie_name">
            {Card.title}
          </h3>
          <img src={Card.poster} height="400px" width="275px" alt="Interstellar Poster" id="poster-1" />
        </div>
      </div>
      <div className="col text-white mb-5 ms-3" id="movie_details" style={{ fontSize: 'larger' }}>
        <strong id="title" className="mt-5">
          <label style={{ color: 'rgb(223, 117, 64)' }}>Movie Name:</label> {Card.title}
        </strong>
        <br />
        <span>
          <label style={{ color: 'rgb(227, 87, 17)', fontWeight: 'bold' }}>Rating:</label>
          <label style={{ fontSize: 'large', color: 'yellow' }} className="me-1 my-2">
            ★
          </label>
          <label className="my-2">{Card.imdb_rating}/10</label>
        </span>
        <br />
        <label style={{ color: 'rgb(223, 117, 64)', fontWeight: 'bold' }}>
          Genres:
          <p className="badge bg-primary mb-0 mt-1 my-2 mx-2" id="genres">
          {Card.genres[0]}
          </p>
          <p className="badge bg-danger mb-0 mt-1 my-2 mx-2" id="genres">
          {Card.genres[1]}
          </p>
          <p className="badge bg-info mb-0 mt-1 my-2 mx-2" id="genres">
          {Card.genres[2]}
          </p>
        </label>
        <hr />
        <div className="content" id="about" style={{ fontFamily: 'Montserrat' }}>
          <p>
            {Card.description }
          </p>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default MovieSuggestion;
