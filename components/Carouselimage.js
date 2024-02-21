import Carousel  from 'react-bootstrap/Carousel';
function Carouselimage() {
  return (
    <Carousel>
      <Carousel.Item>
        <img

          className="d-block w-100"
          src="https://images.pexels.com/photos/5722918/pexels-photo-5722918.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>The Expreesion of love</h3>
          <p>Celebrate your happiness though blooms</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/5894075/pexels-photo-5894075.jpeg?auto=compress&cs=tinysrgb&w=600"// Replace with your image URL
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Same day delivery</h3>
          <p>Send blooms at a lightining speed</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/6533340/pexels-photo-6533340.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with your image URL
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>The Anniversary edit</h3>
          <p>Send lots of blooms this anniversary.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Carouselimage;