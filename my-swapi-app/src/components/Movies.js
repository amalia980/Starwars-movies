import React, {useState, useEffect } from 'react';
import Modal from './Modal';
import './Movies.css';

 const Movies = (props) => {

    const {movie} = props;

     const [characters, setCharacters] = useState([]);
     const [loading, setLoading] = useState(true);
     const [isOpen, setIsOpen] = useState(false);

     const fetchReq = movie.characters.map((url) =>
        fetch(url).then((res) => res.json())
    );

    useEffect(() => {
        setTimeout(() => {
          function getCharacters() {
            Promise.all(fetchReq).then((res) => {
              setCharacters(res);
              setLoading(false);
            });
          }
        getCharacters();
      }, 3000)
      });
     

    return (
            <div>
                <button className='movie-lists'
                    onClick={() => setIsOpen(true)}>
                    {movie.title} | {movie.release_date}
                </button>
                <Modal 
                    movie={movie.title} 
                    movieCharacters={characters} 
                    open={isOpen} 
                    onClose={() => setIsOpen(false)} 
                    loading={loading} 
                />
            </div>
        );
};



export default Movies;