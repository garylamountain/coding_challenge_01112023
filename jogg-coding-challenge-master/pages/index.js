import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import GridView from '../components/GridView';
import ListView from '../components/ListView';
import GridViewSVG from '../svgs/grid-view.svg';
import ListViewSVG from '../svgs/list-view.svg';
import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material';

export default function Index() {

  const [listView, setListView] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [filter, setFilter] = useState('All');
  const [filteredData, setFilteredData] = useState([]);

  //  check if screen is "mobile sized" as window changes
  useEffect(() => {

    const updateMobile = () => {
      setMobileView(window.innerWidth < 600 ? true : false)
    }

    updateMobile()

    // the eventlistener in particular notices window size changes
    window.addEventListener('resize', updateMobile)
    return () => {
      window.removeEventListener('resize', updateMobile)
    }
    
  }, [])

  // used swr to make the API call
  function fetchData() {
    const fetcher = (url) => 
    fetch(url)
    .then(res => res.json());
    const { data, error, isLoading } = useSWR(`/api/cards`, fetcher)
  
    return {
      data,
      isLoading,
      isError: error,
    }
  }

  const { data, isLoading, isError } = fetchData();

  useEffect(() => {
    setFilteredData(data);
  }, [data])

  // if there's an error, return an error message for now
  if (isError) return "An error has occurred.";
  // while no error and no data, it must be loading
  if (isLoading) return "Loading...";

  const handleChange = e => {
    setFilter(e.target.value);
    if(e.target.value === "Active"){
      setFilteredData(data.filter(d => d.status === "ongoing"));
    } else if(e.target.value === "Expired"){
      setFilteredData(data.filter(d => d.status === "ended"));
    } else { setFilteredData(data) }
  };
  
  return (
    <div>
      <div className="header">
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>My Joggs</Typography>
        <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth>
        <Select
            value={filter}
            onChange={handleChange}
            className="select"
          >
            <MenuItem value={'All'}>All</MenuItem>
            <MenuItem value={'Active'}>Active</MenuItem>
            <MenuItem value={'Expired'}>Expired</MenuItem>
        </Select>
        </FormControl>
        </Box>
        <span>
          <button onClick={() => setListView(false)} className="view-button">
            <GridViewSVG width={20}
              // seems to be the easiest way to dynamically color the view buttons
              // https://codepen.io/sosuke/pen/Pjoqqp
              style={{ filter: listView ? 
                'invert(25%) sepia(93%) saturate(2070%) hue-rotate(311deg) brightness(83%) contrast(83%)' 
                : 
                'invert(47%) sepia(84%) saturate(395%) hue-rotate(131deg) brightness(91%) contrast(106%)' 
              }}
            />
          </button>
          <button onClick={() => setListView(true)} className="view-button">
            <ListViewSVG width={20}
              style={{ filter: !listView ? 
                'invert(25%) sepia(93%) saturate(2070%) hue-rotate(311deg) brightness(83%) contrast(83%)' 
                : 
                'invert(47%) sepia(84%) saturate(395%) hue-rotate(131deg) brightness(91%) contrast(106%)' 
              }}
            />
          </button>
        </span>
      </div>
      {Array.isArray(filteredData) && filteredData.length > 0 ?
        listView ? <ListView mobileView={mobileView} cards={filteredData}/> : <GridView mobileView={mobileView} cards={filteredData}/>
        : null
      }
    </div>
  );
}

