import { useNavigate } from "react-router-dom";
import './movieCard.css';

function MovieCard({ movie, favorited }) {
    const posterBasePath = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

    const navigate = useNavigate();

    const handleGoToDetailsPage = (event) => {
        event.preventDefault();
        navigate("/detailsPage", { state: { id: movie.id } });
    }

    const handleFavoriteMovie = () => {

    }

    return (
        <div className="col-lg-2 mb-4">
            <div className="card">
                <img src={posterBasePath + movie.poster_path} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title "><span>{movie.title.substring(0, 200)}</span></h5><span className="far fa-star" aria-hidden="true"></span><span className="ml-1">{movie.vote_average}</span>
                    <p className="card-text">{movie.overview.substring(0, 125).concat('...')}</p>
                    <div className="d-flex justify-content-between p-0"><span className="far fa-calendar" aria-hidden="true"> {movie.release_date}</span><span className="far fa-play-circle"></span></div>
                    <div className="d-flex justify-content-between mt-3 p-0">
                        <a className="stretched-link" onClick={handleGoToDetailsPage}>Details</a>
                        {favorited ? <a className="fa-solid fa-star" onClick={handleFavoriteMovie}></a> 
                        : <a className="far fa-star" onClick={handleFavoriteMovie}></a>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;