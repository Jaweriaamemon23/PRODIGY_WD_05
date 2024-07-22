import React from 'react';
import { Link } from 'react-router-dom'; // Corrected import
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
import Footer from './Footer';
import news1 from '../Assets/Images/n1.png';
import news2 from '../Assets/Images/news2.png';
import news3 from '../Assets/Images/news3.png';
import news4 from '../Assets/Images/new4.png';
import news5 from '../Assets/Images/news5.png';
import news6 from '../Assets/Images/othernews.png';

export default function NewsandBlogs() {
  return (
    <>     <div className='bg3'>
          <Header />


          <Container style={{ marginTop: '50px', marginBottom: '50px' }}>
            {/* Heading */}
            <Row>
              <Col>
                <h1 style={{ marginTop: '140px', color: 'white', textAlign: 'left', fontFamily: 'YourCustomFont, sans-serif', textDecoration: 'underline' }}>NEWS & BLOGS</h1>
              </Col>
            </Row>

            {/* News Sections */}
            {[{ img: news1, date: '01 Dec 2023', categories: 'TECHNOLOGIES , WEATHER', title: 'Understanding The Four Seasons', content: 'As we approach the winter solstice, a time of year surrounded in myths and legends, many people around the world start to prepare for a unique time where the sun appears to stand still...', tags: '#agriculture #climatechange #smartfarming #weather #weatheralerts' },
              { img: news2, date: '15 Nov 2023', categories: 'TEAM&COMPANY , TECHNOLOGIES , WEATHER', title: 'The weather at zero degrees', content: 'When temperatures drop to zero degrees, water takes on a seemingly mystical transition from its liquid to solid state. This solid has shaped and molded our planet and our lives, has created devastation, wrecked ships, inspired e...', tags: '#api #travels #weather #weathermap' },
              { img: news3, date: '29 Sep 2023', categories: 'TECHNOLOGIES , WEATHER', title: 'SKYSYNC at BigData LDN 2023', content: 'OpenWeather were delighted to be part of BigData LDN 2023 - the UK\'s leading data and analytics annual event, and were overwhelmed by the positive response from the attendees who visited our stand...', tags: '#api #climatechange #dashboard #dataquality #Google' },
              { img: news4, date: '06 Sep 2023', categories: 'TEAM&COMPANY , TECHNOLOGIES , WEATHER', title: 'The Summer of Heatwaves', content: 'The seemingly relentless 2023 heatwave that shows no signs of respite has been attributed to a combination of factors, including climate change, the El Niño weather pattern, as well as a stubbornly static gulf stream...', tags: '#agriculture #api #climatechange #weather #weatheralerts' },
              { img: news5, date: '13 Sep 2023', categories: 'TEAM&COMPANY , TECHNOLOGIES , WEATHER', title: 'Announcing Updates to the OpenWeather One Call API 3.0', content: 'The OpenWeather One Call API 3.0 is a complete, sophisticated yet simple, weather API that can be used within a range of applications to give accurate, useful and wide-ranging weather data...', tags: '#api #dataquality #weather #weatheralerts #weatherwidget' }].map((news, index) => (
                <React.Fragment key={index}>
                  {/* Line */}
                  {index !== 0 && <hr style={{ margin: '30px 0', borderColor: 'white' }} />}

                  {/* News Section */}
                  <Row>
                    {/* Image */}
                    <Col xs={12} md={6} style={{ height: '200px', width: '250px', overflow: 'hidden', marginTop: '40px', marginLeft: '0px' }}>
                      <img src={news.img} alt={`News ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Col>

                    {/* Text Next to the Image */}
                    <Col xs={12} md={6} style={{ display: 'flex', alignItems: 'center' }}>
                      <div style={{ textAlign: 'left', color: 'white', paddingLeft: '20px' }}>
                        <p style={{ fontSize: '14px', lineHeight: '1.5' }}>
                          <span style={{ fontWeight: 'bold', color: '#ffa500' }}>{news.date}</span>
                          <br />
                          <span style={{ textTransform: 'uppercase' }}>{news.categories}</span>
                          <br />
                          <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{news.title}</span>
                          <br />
                          {news.content}
                          <br />
                          <span style={{ fontWeight: 'bold' }}>{news.tags}</span>
                        </p>
                      </div>
                    </Col>
                  </Row>
                </React.Fragment>
              ))}

            {/* Line */}
            <hr style={{ margin: '30px 0', borderColor: 'white' }} />
            <br></br>
            <br></br>
            <img src={news6} alt='other news' style={{ width: '20%' }} />
          </Container>

          <Footer />
        </div>
    </>
  );
}
