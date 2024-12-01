import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './HomePage.css'; // Add necessary CSS for styling
import background1 from './images/background1.jpg';
import background2 from './images/background2.jpg';
import background3 from './images/background3.jpg';
import logo from './images/gawn.jpeg';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [background1, background2, background3];

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);

    return () => clearInterval(autoSlideInterval); // Cleanup interval on unmount
  }, [currentSlide]);

  const showSlide = (index) => {
    setCurrentSlide((index + slides.length) % slides.length);
  };

  const handleScroll = () => {
    const header = document.querySelector('header');
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 50);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
  {/* Header */}
  <header className='header'>
    <nav className='nav'>
      <div className='logo-m'>
        <img src={logo} alt='EduServe Logo' />
      </div>
      <div className='auth-links'>
        {/* Use Link for navigation */}
        <Link to='/login'>Login</Link>
        <Link to='/register'>Sign Up</Link>
      </div>
      <div className='nav-center'>
        {/* Internal links remain as anchor tags for smooth scrolling */}
        <a href='#features'>Features</a>
        <a href='#about'>About</a>
        <a href='#contact'>Contact</a>
      </div>
    </nav>
  </header>

  {/* Slideshow Container */}
  <div className='slideshow-container'>
    {slides.map((slide, index) => (
      <div
        key={index}
        className={`slide ${index === currentSlide ? 'active' : ''}`}
        style={{ backgroundImage: `url(${slide})` }}
      ></div>
    ))}

    <div
      className='slide-arrow prev'
      onClick={() => showSlide(currentSlide - 1)}
    >
      <i className='fas fa-chevron-left'></i>
    </div>
    <div
      className='slide-arrow next'
      onClick={() => showSlide(currentSlide + 1)}
    >
      <i className='fas fa-chevron-right'></i>
    </div>

    <div className='hero-content'>
      <h1>Education Content Management System</h1>
      <p>
        Empowering individuals with knowledge, skills, and opportunities for
        growth.
      </p>
      {/* Use Link for CTA button */}
      <Link to='/login' className='cta-button'>
        Get Started
      </Link>
    </div>
  </div>

  {/* Features Section */}
  <section id='features' className='features-section'>
    <h2>Features</h2>
    <div className='features-list'>
      <div className='feature-item'>
        <i className='fas fa-book'></i>
        <h3>Comprehensive Course Management</h3>
        <p>
          Organize and manage educational courses effectively with structured
          tools.
        </p>
      </div>
      <div className='feature-item'>
        <i className='fas fa-chart-line'></i>
        <h3>Real-Time Performance Tracking</h3>
        <p>
          Monitor student progress and performance with insightful analytics.
        </p>
      </div>
      <div className='feature-item'>
        <i className='fas fa-users'></i>
        <h3>Collaborative Learning</h3>
        <p>
          Foster collaboration among students and educators through interactive
          tools.
        </p>
      </div>
    </div>
  </section>

  {/* About Section */}
  <section id='about' className='about-section'>
    <h2>About Us</h2>
    <div className='about-content'>
      <p>
        Aime Education Consult is dedicated to transforming the education landscape. Our
        platform integrates the latest in educational technology and
        data-driven solutions to empower learners and educators alike. With
        EduServe, managing and delivering quality education becomes effortless.
      </p>
    </div>
  </section>

  {/* Footer Section */}
  <footer>
    <p className='th'>&copy; 2024 Kayigamba. All rights reserved.</p>
  </footer>
</div>
    
  );
};

export default HomePage;
