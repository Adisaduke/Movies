import { React, useState } from 'react'
import './Navbar.css'
import imgg from '../Assets/imgg.jpg'
import { useSearch } from '../API/SearchContext'
import { useLoading } from '../API/LoadingContext'




const Navbar = () => {

  const { searchQuery, setSearchQuery, handleSearch } = useSearch();
  const { setIsLoading } = useLoading();


  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setSearchQuery(newQuery);
  };

  const searchHandleClick = async () => {
    // Set isLoading to true before starting the search
    setIsLoading(true);

    try {
      // Trigger the search using handleSearch
      await handleSearch(searchQuery);

      // Clear the searchQuery
      setSearchQuery('');
    } catch (error) {
      // Handle any errors that occur during the search, e.g., display an error message
      console.error('Error:', error);
    } finally {
      // Set isLoading back to false whether the search succeeds or fails
      setIsLoading(false);
    }
  };



  return (
    <header>
      <img alt='homepageImage' className='image' src='https://outdoor-cinema.net/media/pages/bundles/6/d7cc89605b-1673831686/best-of-ocean-outdoor-cinema-background-1440x600-crop-45-19.jpg' />
      <div className='header_container'>
        <nav>
          <div className='logos'>
            <div className='logo'><i class="fas fa-video">MovieBox</i>
            </div>
          </div>
          <div className='search'>
            <div className="search-container">
              <input
                placeholder="Search movies..."
                value={searchQuery}
                onChange={handleInputChange}
                type="text"
                className="search-input"
              />
              <button className="search-button">
                <i onClick={searchHandleClick} className="fas fa-search"></i>
              </button>
            </div>
          </div>
          {/* <div className='search'>
            <input
              className='search_bar'
              type="text"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={handleInputChange}
            />
            <i className="fas fa-search" onClick={searchHandleClick}></i>
          </div> */}
          <div className='sign'>
            <div className='sign_in'>Sign in</div>
          </div>
        </nav>
        <div className='movie_details'>
          <p className='name_details'>John Wick 3: Parabellum</p>
          <div className='ratings_details'>
            <p><i class="fa-brands fa-imdb"></i>860/100</p>
            <p><i className="fas fa-users"></i>97%</p>
          </div>
          <p className='description_details'>John Wick is on the run after killing a member of the international assassins' guid, and with a $14 million price tag on his head, he is the target of hit men and women everywhere...</p>
          <button>WATCH TRAILER</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar