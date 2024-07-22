import React from 'react';
import Header from './Header';
import Footer from './Footer';
import header from '../Assets/Images/Header1.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import App from '../App';
export default function Home() {
  const buttonStyle = {
    backgroundColor: '#D9D9D9',
    color: 'black',
    borderRadius: '40px',
  };
  return (
    <>
    <div className='bg'>
      <Header />
      <div className="mt-3" style={{ color: 'white' ,paddingTop:"20px" }}>
      <h1>Welcome to <span style={{ color: '#F8DC7B' }}>SkySync</span></h1>
      <h6>Sun or Storm, Stay informed and in control!</h6>
      <br></br>
      <Link to='/Weather'><Button type="submit" style={{ ...buttonStyle, fontSize: "20px", padding: "15px 20px" }}>
 <b> Try Dashboard</b>
</Button>

      </Link>
      <br></br><br></br>
      </div>
      <Footer />
      </div>
    </>
  );
}
