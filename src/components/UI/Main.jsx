import React, { useState } from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import axios from 'axios'

const Main = () => {
  const [AData, setAData] = useState([]);
  const [isSearched, setSearched] = useState(false);

  const onSearch = async (value, e) => {
    e.preventDefault();
    try {
      const URL = `https://api.unsplash.com/search/photos?query=${value}&client_id=Nj8iVvDUOIrZ1GkUnSaBMeyxCkKnjvOAWXgp3GV9Kc0`;
      const response = await axios.get(URL);
      const data = response.data;
      setAData(data)
      setSearched(true)
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div>
      <NavBar onSearch={onSearch}/>
      <Hero newData={AData} pass={setAData} searched={isSearched}/>
    </div>
  )
}

export default Main
