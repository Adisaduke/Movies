import React from 'react'
import { createContext, useContext, useEffect, useState } from 'react';

const DataContext = createContext();

export function TmdbContext() {
  return useContext(DataContext);
}

export function TmdbProvider({ children }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from TMDb and set it in the context
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=ee2f56a0cfbba3046571338f1d5a0f87')
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setError(null); // Clear any previous errors
      })
      .catch((error) => {
        setError(error); // Set error state if an error occurs
        console.error(error);
      });
  }, []);

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
}


// import React, { createContext, useContext, useEffect, useState } from 'react';

// const DataContext = createContext();

// export function useData() {
//   return useContext(DataContext);
// }

// export function DataProvider({ children }) {
//   const [data, setData] = useState([]);

//   useEffect(() => {
   
//     fetch('YOUR_TMDB_API_ENDPOINT')
//       .then((response) => response.json())
//       .then((data) => setData(data.results))
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <DataContext.Provider value={data}>
//       {children}
//     </DataContext.Provider>
//   );
//

