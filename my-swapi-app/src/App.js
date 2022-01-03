import './App.css';
import Movies from './components/Movies';
import React, { useState, useEffect} from 'react';
import Header from './components/Header';

function App() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      async function getMovies() {
        let res = await fetch("https://swapi.dev/api/films/");
        let data = await res.json();
        setMovies(data.results);
        setLoading(false)
      }
      getMovies();
    }, 3000)
  }, [])

  return (
    <>
    <Header />
    <div className='wrapper'>
      

  <div className='container'>
      {loading && (<h2>Loading...</h2>)}
      {movies.map((movie) => (
        <Movies key={movie.id} movie={movie} />
      ))}
      </div>
    </div>
    </>
  );
}

export default App;
