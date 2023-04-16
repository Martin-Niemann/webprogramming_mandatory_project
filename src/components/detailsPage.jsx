import { useFetchMovieByIdQuery } from "../store";
import { useLocation } from "react-router-dom";
import MovieDetails from "./movieDetails"

function DetailsPage() {
    const location = useLocation();

    var { data, error, isFetching } = useFetchMovieByIdQuery(location.state.id);

    let content;
    if (isFetching) {
        content = <div>Loading;</div>
    } else if (error) {
        content = <div>Error loading movie.</div>;
    } else {
        if(!Array.isArray(data)) {
            data = [data];
        }
        content = data.map((movie) => {
            return <MovieDetails key={movie.id} movie={movie}></MovieDetails>
        });
    }

    return (
        <>
            {content}
        </>
    );
}

export default DetailsPage;