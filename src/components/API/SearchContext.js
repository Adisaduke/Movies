
import React, { createContext, useContext, useState } from 'react';
import { TmdbContext } from './TmdbContext';

const SearchContext = createContext();

export function useSearch() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }) {
  const movies = TmdbContext();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    // Implement your search logic here
    // Update setSearchResults with the filtered results

    // const filteredMovies = movies.filter((movie) =>
    //   movie.title.toLowerCase().includes(query.toLowerCase())
    // );


    const filteredMovies = movies.filter((movie) => {
      const { title, release_date } = movie;
      const lowercaseQuery = query.toLowerCase();
      return (
        title.toLowerCase().includes(lowercaseQuery) ||
        release_date.toString().includes(lowercaseQuery)
      );
    });

    setSearchQuery(query);
    setSearchResults(filteredMovies);
  };

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, searchResults, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

