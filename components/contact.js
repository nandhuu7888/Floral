import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
export default function register(){
  return (
    <div className="contact">
      <h2>Contact Us</h2>
   


      <div className="contact-info">
        <h3>Visit Us</h3>
        <p>Flora</p>
        <p>coimbatore,Tamilnadu</p>

        <h3>Call Us</h3>
        <p>Phone: +1 (XXX) XXX-XXXX</p>

        <h3>Email Us</h3>
        <p>Email: @flora.com</p>

        <h3>Follow us </h3>
        <p>
          Connect with us on social media platforms to stay updated on our latest offers, new arrivals, and floral inspirations:
        </p>   
        <div className="social-media-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
       


      </div>
        <h3>Store Hours</h3>
        <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
        <p>Saturday: 10:00 AM - 6:00 PM</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
    
  );
};
