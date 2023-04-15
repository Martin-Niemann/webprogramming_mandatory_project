import { Routes, Route, Link } from 'react-router-dom';
import HighestRatedMovieList from "./components/highestRatedMoviesList";
import PopularMoviesList from "./components/popularMoviesList";
import Home from './components/home';
import SearchMovie from './components/searchMovie';
import SearchedMovieList from './components/searchedMovieList';

function App() {
    return (
        <div>
            <div className="navbar navbar-expand-lg justify-content-between">
                <nav className="nav navbar-nav">
                    <Link to='/' className="nav-item nav-link">Home</Link>
                    <Link to='/popular' className="nav-item nav-link">Popular</Link>
                    <Link to='/highest-rated' className="nav-item nav-link">Highest Rated</Link>
                </nav>
                <SearchMovie />
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/popular' element={<PopularMoviesList />} />
                <Route path='/highest-rated' element={<HighestRatedMovieList />} />
                <Route path='/searchedMovie' element={<SearchedMovieList />} />
            </Routes>
        </div>
    );
}

export default App;
