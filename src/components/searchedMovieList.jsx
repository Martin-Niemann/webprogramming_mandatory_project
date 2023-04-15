import { useSelector } from "react-redux";
import { useFetchSearchMovieQuery } from "../store";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "./movieCard"

function SearchedMovieList() {
    const location = useLocation();
    
    const [localSearchTerm, setLocalSearchTerm] = useState("");
    
    const searchTerm = useSelector((state) => {
        return state.searchMovie.searchTerm;
    });

    // useEffect is used here to only load the search query from the store into a local, unchanging variable when the location changes
    // i.e. the navigate action in the SearchMovie component is triggered by pressing enter in the search field.
    // this means the user can write something in the search field after already having done a search 
    // without anything happening, such as the h1 changing, before they press enter.
    useEffect(() => {
        setLocalSearchTerm(searchTerm)
    }, [location]);

    const { data, error, isFetching } = useFetchSearchMovieQuery(localSearchTerm);

    let content;
    if (isFetching) {
        content = <div>Loading;</div>
    } else if (error) {
        content = <div>Error loading movies.</div>;
    } else {
        content = data.results.map((movie) => {
            return <MovieCard key={movie.id} movie={movie}></MovieCard>
        });
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <h1 className="text-white-50">Search results for "{localSearchTerm}"</h1>
            </div>
            <div className="row row-cols-3 row-cols-md-2 m-4">
                {content}
            </div>
        </>
    );
}

export default SearchedMovieList;