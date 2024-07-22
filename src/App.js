import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Aboutus from './Components/About';
import Contact from './Components/ContactUs';
import Support from './Components/Support';
import Guide from './Components/Guide';
import Search from './Components/Search';
import NewsandBlogs from './Components/NewAndBlogs';
import { Route, Routes } from 'react-router-dom';
import Weather from './Components/Weather';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/Newsandblog'} element={<NewsandBlogs/>}/>
        <Route path={'/support'} element={<Support/>}/>
        <Route path={'/Guide'} element={<Guide/>}/>
        <Route path={'/Aboutus'} element={<Aboutus/>}/>
        <Route path={'/Contactus'} element={<Contact/>}/>
        <Route path={'/search'} element={<Search/>}/>
        <Route path={'/Weather'} element={<Weather/>}/>
        
      </Routes>
     </div>
  );
}
export default App;
