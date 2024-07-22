import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import image from '../Assets/Images/Rectangle 95.png';
import image3 from '../Assets/Ellipse 1.png';

function Aboutus() {
  const imageStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    marginTop: '150px',
  };

  const overlayTextStyle = {
    position: 'absolute',
    top: '65%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    fontSize: '2em',
    fontWeight: 'bold',
    textAlign: 'left', // Center text
  };

  const buttonStyle = {
    position: 'absolute',
    top: '90%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  const aboutTextStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: '#fff',
    padding: '20px',
    borderRadius: '10px',
    marginTop: '20px',
    textAlign: 'left',
  };

  return (
    <div className='bg2'>
      <Header />
      <Container className="my-4 text-center position-relative">
        <img src={image} alt="SKYSYNC" style={imageStyle} />
        <div style={overlayTextStyle}>About SkySync</div>
        <Button variant="success" style={buttonStyle}>
          Talk to us
        </Button>
      </Container>

      <Container>
        <h2 style={{ color: '#E2E3A1', textAlign: 'left', marginTop: '20px' }}>
          <b>About us</b>
        </h2>

        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6 mt-5">
            <p style={{ color: 'white', textAlign: 'left' }}>
              Dive into a world of weather insights with our News and Blogs section at SKYSYNC. Stay ahead of the forecast
              with breaking news, expert analysis, and captivating articles. Whether you're a weather enthusiast or just
              looking to stay informed, explore our curated content for a deeper understanding of meteorological
              phenomena and stay connected with the latest developments in the atmospheric world.
            </p>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6">
            <img src={image3} alt="SKYSYNC" style={{ width: '50%', height: 'auto', objectFit: 'cover' }} />
          </div>
        </div>
      </Container>

      <Container>
        <br />
        <h2 style={{ color: '#E2E3A1', textAlign: 'left' }}>
          <b>Mission</b>
        </h2>
        <br></br>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 text-align-center justify-content-center">
            <p style={{ color: 'white', textAlign: 'center' }}>
              Our mission is to help companies to face the future trends and challenges with confidence, using
              OpenWeather accurate and precise weather data.
            </p>
          </div>
        </div>
      </Container>

      <Container>
        <br />
        <h2 style={{ color: '#E2E3A1', textAlign: 'left' }}>
          <b>Core Values</b>
        </h2>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12" style={{ color: 'white', textAlign: 'left' }}>
            <ul>
              <li>
                <h4>Accuracy:</h4> We are dedicated to providing precise and up-to-date weather information to our
                users, fostering trust and reliability.
              </li>
              <li>
                <h4>Accessibility:</h4> We believe in making weather data accessible to everyone. Our platform is
                designed for ease of use, ensuring that users of all backgrounds can benefit from our services.
              </li>
              <li>
                <h4>Innovation:</h4> We continuously explore new technologies and methodologies to enhance our services,
                offering innovative features and solutions to meet the evolving needs of our users.
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
}

export default Aboutus;
