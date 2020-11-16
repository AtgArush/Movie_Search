import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import "./MovieCard.css"

function MovieCard({Movie}) {

    const base_url = "https://image.tmdb.org/t/p/original/"

    function truncateString(str) {
        return str.length > 100 ? str.substr(0, 100) + '…' : str;
      }

    return (
        <div className = "Root">
            {/* {Movie.title}
            {Movie.original_language}
            {Movie.release_date} */}
            <Flippy
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="vertical"
            // style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
            >
                <FrontSide className="MovieCard__Front"
                >
                    <img src = {`${base_url}${Movie.backdrop_path}`} className = "MovieCardFront__Image" alt = {Movie.original_title}></img>
                </FrontSide>
                <BackSide
                style={{ backgroundColor: '#175852'}}>
                    <div className="Movie__Info">
                    {/* "https://www.google.com/search?q=" */}
                        <h1>{Movie.original_title}</h1>
                        <div className="release__date">
                            <h3>Release Date : </h3>
                            <h3>- {Movie.release_date}</h3>
                        </div>
                        <div className="release__date">
                            <h3>Average Rating :</h3>
                            <h3>- {Movie.vote_average}</h3>
                        </div>
                        <div className="release__date">
                            <h5 className = "description">Description </h5>
                            <h5>:- {truncateString(Movie.overview)}</h5>
                        </div>
                    </div>
                </BackSide>
            </Flippy>
        </div>
    )
}

export default MovieCard
