import React, { useState } from "react";
import MovieDetail from "./MovieDetail";
import './MovieList.css';

const MovieList = ({ movieList }) => {
    const [styleSearch, setStyleSearch] = useState([]);
    
    const styles = [
        'Comedie',
        'Aventure',
        'Fantastique',
        'Animation',
        'Action'
    ];

    const handleStyleSearch = (e) => {
        const st = e.target.value;
        console.log(st);
        if (styleSearch.includes(st)) {
            setStyleSearch(styleSearch.filter(it => it.st));
        } else {
            setStyleSearch([st, ...styleSearch]);
        }
    };

    return (
        <div className='movies'>
            <div className="video-annonce">
                {/* Changer span par l'image/video principal */}
                <span>{movieList[0].image}</span>
            </div>
            <div className="container-movies">
                <div className="list-checkbox-container">
                    {styles.map((style, index) => (
                        <div key={index}>
                            <input type="checkbox" id="style" name="style" value={style} onChange={handleStyleSearch} />
                            <span className="info-checkbox">{style}</span>
                        </div>
                        )
                    )}
                </div>
                <div className="list-movies">
                    {movieList.map(movie => (
                        <MovieDetail movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;