import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { allCountriesData, openSinglePage } from '../store/OpenSingleSlice';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
} from '@mui/material';

function Data() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [country, setCountry] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const [val, setVal] = useState('All');

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  const theme = useSelector((state) => state.country.theme);
  localStorage.setItem('theme', theme);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/${
          val === 'All' ? 'all' : `region/${val}`
        }`
      );
      setData(response.data);
      dispatch(allCountriesData(response.data));
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [val]);

  function handleAdd(item) {
    dispatch(openSinglePage(item));
  }

  return (
    <div className="data">
      <div className="Navbar">
        <div className="container">
          <div className="navbar_inner">
            <input
              type="search"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="search"
            />
            <Box sx={{ minWidth: 120 }} bgcolor={theme ? '#fff' : '#fff'}>
              <FormControl fullWidth>
                <Select value={val} onChange={handleChange}>
                  <MenuItem value={'All'}>All</MenuItem>
                  <MenuItem value={'Asia'}>Asia</MenuItem>
                  <MenuItem value={'Africa'}>Africa</MenuItem>
                  <MenuItem value={'Americas'}>America</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="appWrapper">
          {data ? (
            data

              .filter((country) => country.name.common.includes(text))
              .map((item) => {
                return (
                  <Link
                    onClick={() => handleAdd(item)}
                    to={`/${item.cca3}`}
                    className="card"
                    key={item.population + Math.random()}
                  >
                    <div>
                      <div className="item_image">
                        <img src={item.flags.png} />
                      </div>
                      <div className="card_info">
                        <h4 className="title">{item.name.common}</h4>
                        <p>Population: {item.population}</p>
                        <p>Region: {item.region}</p>
                        <p>Capital: {item.capital}</p>
                      </div>
                    </div>
                  </Link>
                );
              })
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Data;
