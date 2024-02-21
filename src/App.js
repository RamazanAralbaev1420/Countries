import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Data from './components/Data';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import store from './store/store';
import PageInfo from './components/PageInfo';
import { Skeleton } from '@mui/material';
function App() {
  const country = useSelector((state) => state.country.singlePage[0]);
  const theme = useSelector((state) => state.country.theme);

  // const [theme, setTheme] = useState(localStorage.getItem('theme'));
  // const theme = localStorage.getItem('theme');

  // console.log(theme);

  return (
    <BrowserRouter>
      <div className={`App ${theme ? 'light' : 'dark'}`}>
        <Header />
        <Routes>
          <Route path="/" element={<Data />} />

          {/* <Route path={`/:fifa`} element={<SinglePage />} /> */}

          <Route path={`/:fifa`} element={<PageInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
