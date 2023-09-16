import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TmdbProvider } from './components/API/TmdbContext';
import { SearchProvider } from './components/API/SearchContext';
import { LoadingProvider } from './components/API/LoadingContext';



// import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <TmdbProvider>
      <SearchProvider>
        <LoadingProvider>
          <App />
        </LoadingProvider>
      </SearchProvider>
    </TmdbProvider>
  </Fragment>
);

