import './MovieDetail.css';

const MovieDetail = ({ movie }) => {
    const fullStar = 'fa fa-star';
    const halfStar = 'fa fa-star-half-o';
    const emptyStar = 'fa fa-star-o';

    const stars = () => {
        const st = [];
        if (movie.votes < 20) {
            st.push(fullStar);
            st.push(emptyStar);
            st.push(emptyStar);
            st.push(emptyStar);
            st.push(emptyStar);
        }
        if (movie.votes > 21 && movie.votes < 40) {
            st.push(fullStar);
            st.push(halfStar);
            st.push(emptyStar);
            st.push(emptyStar);
            st.push(emptyStar);
        }
        if (movie.votes > 41 && movie.votes < 60) {
            st.push(fullStar);
            st.push(fullStar);
            st.push(emptyStar);
            st.push(emptyStar);
            st.push(emptyStar);
        }
        if (movie.votes > 61 && movie.votes < 80) {
            st.push(fullStar);
            st.push(fullStar);
            st.push(halfStar);
            st.push(emptyStar);
            st.push(emptyStar);
        }
        if (movie.votes > 81) {
            st.push(fullStar);
            st.push(fullStar);
            st.push(fullStar);
            st.push(fullStar);
            st.push(fullStar);
        }
        return st;
    }

    return (
        <div className="movie-detail-container">
            <div className="image-movie">
                {movie.image}
            </div>
            <div className="information-container">
                <div>
                    <span className="title">{movie.title}</span>
                    <span>
                        {
                            stars().map(star => (<i className={star + ' star-color'} />))
                        }
                    </span>
                    <span className="votes-container">({movie.votes} votes)</span>
                </div>
                <div className="information-date">
                    <span>{movie.year} - </span>
                    <span className="studio-info">{movie.studio}</span>
                </div>
                <div>
                    {movie.description}
                </div>
                <div>
                    <button className="detail-button">
                        Lire le details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;