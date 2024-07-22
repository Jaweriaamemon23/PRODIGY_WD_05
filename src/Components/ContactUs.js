import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import Image2 from '../Assets/Img 1.png';

const Contact = () => {
  const componentStyle = {
    backgroundImage: `url(${Image2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    minHeight: '100vh',
    position: 'relative',
  };
  const contactSectionStyle = {
    paddingTop: '180px',
  };
  return (
    <>
      <div  className='bg5'style={componentStyle}>
      <Header/>
        <section id="contact" className="contact" style={contactSectionStyle}>
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2 style={{color:'white', textDecoration:'underline'}}><b>CONTACT</b></h2>
            </div>
          </div>
          <br></br>
          <div className="container d-flex justify-content-center" data-aos="fade-up">
            <div className="col-lg-8 mt-5 mt-lg-0">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="8"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <br />
                  <Button variant="light">Send Message</Button>{' '}
                 
                </div>
              </form>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
};

export default Contact;
