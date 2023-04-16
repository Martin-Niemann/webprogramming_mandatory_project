function MovieDetails({ movie }) {
    const posterBasePath = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

    return (
        <div className="container">
            <div className="row justify-content-center mb-4">
                <img src={posterBasePath + movie.poster_path} alt="..." />
            </div>
            <div className="row justify-content-center">
                <h3 className="text-white-50">{movie.original_title}</h3>
            </div>
            <div className="row justify-content-center mb-5">
                {movie.tagline.length > 0 &&
                    <h3 className="text-white-50">Tagline: {movie.tagline}</h3>
                }
            </div>
            <div className="row justify-content-center">
                {movie.budget > 0 &&
                    <h3 className="text-white-50">Budget: {movie.budget.toLocaleString()}$</h3>
                }
            </div>
            <div className="row justify-content-center">
                {movie.revenue > 0 &&
                    <h3 className="text-white-50">Revenue: {movie.revenue.toLocaleString()}$</h3>
                }
            </div>
        </div>
    );
}

export default MovieDetails;