/* Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  body {
    overflow-x: hidden;
    background-color: #f0f8ff; /* Soft light blue */
  }
  
  /* Header Styles */
  header {
    background-color: rgba(45, 85, 135, 0.95); /* Rich blue */
    padding: 1rem;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    transition: background-color 0.3s;
  }
  
  header.scrolled {
    background-color: rgb(28, 62, 92); /* Darker blue for scrolled state */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
  
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .auth-links {
    display: flex;
    gap: 1rem;
  }
  
  .auth-links a {
    color: white;
    background-color: #4caf50; /* Green */
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1.5rem;
    border-radius: 5px;
  }
  
  .auth-links a:hover {
    background-color: #388e3c; /* Darker green for hover */
  }
  
  .nav-center {
    display: flex;
    gap: 2rem;
  }
  
  .nav-center a {
    color: white;
    text-decoration: none;
    font-weight: 500;
  }
  
  /* Slideshow Styles */
  .slideshow-container {
    margin-top: 4rem;
    position: relative;
    height: 600px;
    overflow: hidden;
  }
  
  .slide {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-size: cover;
    background-position: center;
    transition: opacity 1s ease-in-out;
  }
  
  .slide.active {
    opacity: 1;
  }
  
  .slide-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
  }
  
  .slide-arrow.prev {
    left: 2rem;
  }
  
  .slide-arrow.next {
    right: 2rem;
  }
  
  .slide-arrow i {
    color: white;
    font-size: 1.5rem;
  }
  
  .hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    width: 80%;
  }
  
  .hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    color: #ff9800; /* Orange */
  }
  
  .hero-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  .th{
    color: white;
  }
  
  .cta-button {
    padding: 1rem 2.5rem;
    background-color: #2196f3; /* Blue */
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
  }
  
  .cta-button:hover {
    background-color: #1976d2; /* Darker blue */
  }
  
  /* Features Section */
  .features-section {
    padding: 4rem 2rem;
    background-color: #e8f5e9; /* Soft green */
    text-align: center;
  }
  
  .features-section h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #2c5f2d; /* Dark green */
  }
  
  .features-list {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .feature-item {
    flex: 1 1 300px;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #ffffff; /* White */
    text-align: left;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .feature-item i {
    font-size: 2rem;
    color: #2196f3; /* Blue */
  }
  
  .feature-item h3 {
    margin-top: 1rem;
    font-size: 1.5rem;
  }
  
  .feature-item p {
    margin-top: 0.5rem;
    color: #555;
  }
  
  /* About Section */
  .about-section {
    padding: 4rem 2rem;
    background-color: #f3e5f5; /* Light purple */
    text-align: center;
  }
  
  .about-section h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #4a148c; /* Deep purple */
  }
  
  .about-content {
    max-width: 800px;
    margin: 0 auto;
    font-size: 1.2rem;
    color: #555;
  }
  
  /* Footer Section */
  footer {
    padding: 2rem;
    background-color: rgba(45, 85, 135, 0.95); /* Rich blue */
    color: white;
    text-align: center;
  }
  
  footer p {
    margin-top: 1rem;
    font-size: 1rem;
  }
  
  .logo-m {
    height: 100%;
    background-color: transparent; /* Ensure no unwanted background color */
    display: flex; /* Align the image properly within its container */
    align-items: center; /* Vertically center the image */
    justify-content: center; /* Horizontally center the image */
    overflow: hidden; /* Prevent any overflow */
  }
  
  .logo-m img {
    width: 30%; /* Fill the width of the container */
    height: 30%; /* Fill the height of the container */
    border-radius: 30px; /* Rounded corners */
    object-fit: cover; /* Ensure the image fills the container without distortion */
  }
  
  