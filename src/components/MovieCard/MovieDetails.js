// import React, { useState, useEffect, Fragment } from 'react';
// import Card from './Card';
// import './/MovieDetails.css';
// import { TmdbContext } from '../API/TmdbContext';
// import { useSearch } from '../API/SearchContext';

// const MovieDetails = () => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const movies = TmdbContext();
//     const { searchResults, handleSearch, searchQuery } = useSearch();
//     const [searchClicked, setSearchClicked] = useState(false); // Track if search button is clicked
//     const [isLoading, setIsLoading] = useState(false); // Track loading state

//     useEffect(() => {
//         // Check if searchResults have data, set searchClicked accordingly
//         if (searchResults.length > 0) {
//             setSearchClicked(true);
//         } else {
//             setSearchClicked(false);
//         }
//     }, [searchResults]);



//     return (
//         <Fragment>
//             {searchClicked ? ( // Conditionally render based on searchClicked state
//                 <div className="movie_container">
//                     {searchResults.map((movie) => (
//                         <div key={movie.id} className="movie_item">
//                             <Card key={movie.id} movie={movie} />
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 <div className="movie_container">
//                     {movies.slice(0, 10).map((movie, index) => (
//                         <div key={index} className="movie_item">
//                             <Card key={movie.id} movie={movie} />
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </Fragment>
//     );
// };

// export default MovieDetails;





import React, { useState, useEffect, Fragment } from 'react';
import Card from './Card';
import './/MovieDetails.css';
import { TmdbContext } from '../API/TmdbContext';
import { useSearch } from '../API/SearchContext';
import { useLoading } from '../API/LoadingContext';
import Loading from '../UI/Loading';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const movies = TmdbContext();
    const { searchResults, handleSearch, searchQuery } = useSearch();
    const [searchClicked, setSearchClicked] = useState(false); // Track if search button is clicked
    const [isLoading, setIsLoading] = useState(false); // Track loading state
    const { id } = useParams()

    useEffect(() => {
        // Check if searchResults have data, set searchClicked accordingly
        if (searchResults.length > 0) {
            setSearchClicked(true);
        } else {
            setSearchClicked(false);
        }
    }, [searchResults]);

    // Callback function to set isLoading to true
    const handleLoading = () => {
        setIsLoading(true);
    };

    return (
        <Fragment>
            {isLoading ? <Loading /> : null}
            {searchClicked ? ( // Conditionally render based on searchClicked state
                <div className="movie_container">
                    {searchResults.map((movie) => (
                        <Link key={movie.id} to={`/movie/${movie.id}`} className="movie_item">
                            <Card key={movie.id} movie={movie} />
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="movie_container">
                    {movies.slice(0, 10).map((movie, index) => (
                        <Link key={index} to={`/movie/${movie.id}`} className="movie_item">
                            <Card key={movie.id} movie={movie} />
                        </Link>
                    ))}
                </div>
            )}

        </Fragment>
    );
};

export default MovieDetails;
