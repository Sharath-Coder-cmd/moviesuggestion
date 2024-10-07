import './App.css';
import MovieCards from './MovieCards';
import MovieSuggestion from './MovieSuggestion';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './Search';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <hr className='bg-white my-0' style={{ border: "60px" }} />
        <Search/>
        <Routes>
            <Route path='/' element={<MovieCards />} />
              <Route path='/search' element={<MovieCards />} />
              <Route path='/genres' element={<MovieCards />} />
            <Route path='/movies/:id' element={<MovieSuggestion />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
