import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Search() {
  const buttonStyle = {
    backgroundColor: '#D9D9D9',
    color: 'black',
    borderRadius: '40px',
  };

  const [position, setPosition] = useState([0, 0]); // Initial position for the map

  const handleSearch = async () => {
    const place = document.getElementById('search').value;

    try {
      // Use the Google Geocoding API to get the coordinates for the entered place
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          place
        )}&key=YOUR_GOOGLE_MAPS_API_KEY`
      );

      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry.location;
        setPosition([lat, lng]);
      } else {
        // Handle the case when no results are found
        console.error('No results found for the entered place.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <div className='bg'>
        <Header />

        <iframe
          style={{ border: '0', width: '100%', height: '250px', marginTop:'150px' }}
          src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d${position[1]}!3d${position[0]}!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621`}
          frameBorder="10px"
          allowFullScreen
        ></iframe>
<br></br>
<br></br>
  <Footer style={{ marginTop: '80px' }} />
      </div>
   </>
     );
}
