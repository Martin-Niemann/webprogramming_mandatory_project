import { useEffect } from "react";
import { useFetchFavoriteMoviesQuery, useFetchPopularMoviesQuery } from "../store";
import MovieCard from "./movieCard"
import { useState } from "react";

function PopularMoviesList() {
    const { data: favoriteMovies, error: favoritesError, isFetching: favoritesIsFetching } = useFetchFavoriteMoviesQuery();
    const { data: movies, error: moviesError, isFetching: moviesIsFetching } = useFetchPopularMoviesQuery();
    const [content, setContent] = useState("");

    useEffect(() => {
        if (favoritesIsFetching) {
            setContent(<div className="fa-6x fa-solid fa-spinner" style={{color: "#ffffff"}}></div>);
        } else if (favoritesError) {
            setContent(<div style={{color: "#ffffff"}}>Error loading favorites.</div>);
        } else {
            if (moviesIsFetching) {
                setContent(<div className="fa-6x fa-solid fa-spinner" style={{color: "#ffffff"}}></div>);
            } else if (moviesError) {
                setContent(<div style={{color: "#ffffff"}}>Error loading movies.</div>);
            } else {
                const createCards = async () => {setContent(await Promise.all(movies.results.map(async (movie) => {
                    let isFavorite = await checkIfFavorite(movie, favoriteMovies);
                    return <MovieCard key={movie.id} movie={movie} favorited={isFavorite}></MovieCard>;
                })));}
                createCards();
            }
        }
    }, [favoritesIsFetching, moviesIsFetching]);

    const checkIfFavorite = (movie, favoriteMovies) => {
        return new Promise(resolve => {
            let isFavorite = false;
    
            favoriteMovies.forEach(favoriteMovie => {
                if (movie.id === favoriteMovie.id) {
                    isFavorite = true;
                    resolve(isFavorite);
                }
    
                resolve(isFavorite);
            });
        });
    }

    return (
        <div className="row row-cols-3 row-cols-md-2 m-4">
            {content}
        </div>
    );
}
export default PopularMoviesList;