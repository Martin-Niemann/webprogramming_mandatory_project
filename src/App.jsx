import { Routes, Route, Link } from 'react-router-dom';
import HighestRatedMovieList from "./components/highestRatedMoviesList";
import PopularMoviesList from "./components/popularMoviesList";
import Home from './components/home';

function App() {
    return (
        <div>
            <div className="navbar navbar-expand-lg">
                <nav className="nav navbar-nav">
                    <Link to='/' className="nav-item nav-link">Home</Link>
                    <Link to='/popular' className="nav-item nav-link">Popular</Link>
                    <Link to='/highest-rated' className="nav-item nav-link">Highest Rated</Link>
                </nav>
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/popular' element={<PopularMoviesList />} />
                <Route path='/highest-rated' element={<HighestRatedMovieList />} />
            </Routes>
        </div>
    );
}

export default App;
