import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Guide() {
  return (
    <>
      <div className='bg4'>
        <Header />
        <h1 style={{ textDecoration: 'underline', color: 'white', marginTop: '180px', marginBottom: '20px', textAlign: 'left', marginLeft: '10%', marginRight: '10%' }}>How to use SKYSYNC</h1>
        <ol style={{ color: 'white', textAlign: 'left', marginLeft: '10%', marginRight: '10%', fontSize: '18px' }}>
          <li style={{ marginBottom: '10px' }}>Home Page.</li>
          <li style={{ marginBottom: '10px' }}>Click on the "Try Dashboard" button to begin exploring the weather features.</li>
          <li style={{ marginBottom: '10px' }}>Type the name of the city you want to check the weather for in the search bar.</li>
          <li style={{ marginBottom: '10px' }}>Auto-suggestions may appear as you type. Select the desired city from the suggestions.</li>
          <li style={{ marginBottom: '10px' }}>Click the "Get Weather" button to proceed and retrieve the weather information for the chosen city.</li>
          <li style={{ marginBottom: '10px' }}>You'll be directed to the Weather Dashboard page displaying real-time weather information for the selected city.</li>
          <li style={{ marginBottom: '10px' }}>Explore the current weather conditions, including temperature, humidity, wind speed, and more.</li>
          <li>View the multi-day forecast to plan ahead.</li>
        </ol>

        <Footer />
      </div>
    </>
  );
}
