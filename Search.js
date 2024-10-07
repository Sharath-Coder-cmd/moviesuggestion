import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
    const [keyword, setKeyword] = useState("");
    const [genre, setGenre] = useState("");
    const navigate = useNavigate();

    const handleKeywordChange = (e) => {
        setKeyword(e.target.value);
    };

    const handleGenreChange = (e) => {
        setGenre(e.target.value);
    };

    // Function for keyword search
    const handleSearch = async () => {
        if (keyword.trim()) { // Ensure there's a valid keyword
            navigate("/search?keyword=" + keyword); // Navigate with the keyword
        }
    };

    // Function for genre search
    const handleGenreSearch = async () => {
        if (genre.trim()) { // Ensure there's a valid genre
            navigate("/genres?genre=" + genre); // Navigate with the genre
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); 
            handleSearch(); 
            setKeyword("")// Trigger the search when "Enter" is pressed
            
        }
    };
   

    return (
        <div class="container p-1 d-flex justify-content-center ">
          <div class="row">
              <div class="col-lg-12 d-flex justify-content-between align-items-center">
                  
                                   
                  <div class="input-group ms-5 mt-2 me-2">
                      <input type="text" className="form-control" placeholder="Type The Movie Name...."
                        value={keyword}
                        onChange={handleKeywordChange}
                        onKeyDown={handleKeyDown}
                      />
                      <button id="btn" className="btn" style={{ backgroundColor: 'rgb(221, 93, 93)' }}>Search</button>

                  </div> <div class="input-group ms-5 mt-2 me-2">
                    <input type="text" className="form-control" placeholder="Search Required Genres...."
                    value={genre}
                    onChange={handleGenreChange}
                    onKeyDown={(e)=>{
                        if(e.key==="Enter"){
                            handleGenreSearch()
                            setGenre("")
                        }
                    }}
                    />
                      <button id="btn" className="btn" style={{ backgroundColor: 'rgb(221, 93, 93)' }}>Genre</button>

                </div>
                  
              </div>
          </div>
      </div>
    );
}

export default Search;
