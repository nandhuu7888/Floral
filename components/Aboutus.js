import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import AboutData from "./AboutData";
import Footer from './Footer';
import "./About.css";

const Aboutus = (props) => {
  return (
    <div className="destination">
      <h1>ABOUT US</h1>
      <div className="about-content">
        <div className="text-content">
          <AboutData
            className="first-des"
            heading="Welcome to Flora!"
            text="At our flora, we believe in the language of flowers—their ability to convey emotions, celebrate moments, and bring beauty to every occasion. Flora's Exotic Flowers Bouquet, Roses Bouquets are created from the best. Our care for these premium flower bouquets & roses bouquets start with the way they are grown. Our sourcing experts cut through several layers of middlemen, dealing directly with organic growers from across India and the world. Identifying the best growers for each variety of exotic flowers is how we make the start to these gorgeous flower bouquets. We believe in going that extra mile, for all it's worth, in getting the freshest and the most beautiful.
            Our Promise

We go beyond simply delivering flowers; we aim to create moments that linger in memory. Our dedication to service excellence ensures timely deliveries and pristine arrangements, making your floral experience with us seamless and enchanting.

Sustainability & Community

Conscious of our environmental impact, we embrace sustainable practices, supporting eco-friendly initiatives and local growers. With each purchase, you contribute to our shared commitment to a greener, more compassionate world.

Join us in celebrating life's milestones, big or small, with the timeless language of flowers. Experience the artistry of floral expression with flora.

Let every bloom tell a story. Let us be part of yours.

Feel free to personalize it further to align with your shop's unique ethos and values!"
          />
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
        </div>
        <div className="image-content">
          <img src="https://images.pexels.com/photos/1545582/pexels-photo-1545582.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Flower" />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Aboutus;
