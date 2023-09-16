import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./components/Header/Navbar";
import MoviesLists from "./components/MovieCard/MoviesLists";
import Details from "./components/MovieDetails/Details";
import Homepage from './components/UI/Homepage';
import MovieDetails from './components/MovieCard/MovieDetails';


function App() {
  return (
    <>

      
        <Router>
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/movie/:id' element={<Details />} />
          </Routes>
        </Router>
    </>
  )
}

export default App;
