import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";
import { useNavigate } from "react-router-dom";

function SearchMovie() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const searchTerm = useSelector((state) => {
        return state.searchMovie.searchTerm;
    });
    const handleSearchTermChange = (event) => {
        dispatch(changeSearchTerm(event.target.value));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/searchedMovie");
    }

    return (
        <form className="form-inline" onSubmit={handleSubmit}>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">Search</span>
                </div>
                <input className="form-control" value={searchTerm} onChange={handleSearchTermChange} />
            </div>
        </form>
    );
}

export default SearchMovie;