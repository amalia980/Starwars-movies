import React from 'react'
import './Modal.css'

const Modal = (props) => {

    const {open, movieCharacters, onClose, movie, loading} = props;

    if(!open) return null

    //sort characters in alphabetical order
    movieCharacters.sort((a, b) => 
      a.name > b.name ? 1 : -1
    );

    //return ReactDOM.createPortal(
        return (
            <div className='overlay'>
                <div className="popup">
            <h2 className='title'>{movie}</h2>
            {loading && (<h3 className='loading'>Loading...</h3>)}
                {movieCharacters.map((char) => (
                    <div>
                        <ul>
                            <li>{char.name}</li>
                        </ul>
                    </div>
                ))}
                <button className='popup-btn' onClick={onClose} >Close</button>
            </div>
        </div>
      //document.getElementById('portal')
    );
}

export default Modal;