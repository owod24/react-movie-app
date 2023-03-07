import { useState } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg'

//API_KEY: dd5d680d
// Video Tutorial: https://www.youtube.com/watch?v=b9eMGE7QtTk

// TO-DO  
//Figure out a way to trigger a search using the keyboard event
// Write documentation for this project.

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=dd5d680d";

const App = () => {
  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {

    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return(
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input 
          placeholder ="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
          src = {SearchIcon} 
          alt = "search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 
        ? (
          <>
            <div className="container">
              {movies.map( (movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="empty">
              <h2>No Movies Found</h2>
            </div>
          </>
        )}
    </div>
  );
}


export default App;