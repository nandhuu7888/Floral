import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import CardTitle from 'react-bootstrap/esm/CardTitle';
import {Link} from 'react-router-dom';

function CardsImage() {
  return (
  <div>
    <section>
      <br/><br/>
      <center>

          <h1>CURATED COLLECTIONS</h1>
          </center>
    <CardGroup>
        
      <Card>
        <Link to ='/Subscriptons'><Card.Img variant="top"  src=" https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-pink-extravaganza-199417-m.jpg"/></Link>
        <Card.Body>
        <Link to ='/Subscriptons'><Card.Footer>
          <small className="text-muted">Subscriptons</small>
        </Card.Footer></Link>        
        </Card.Body>
       
      </Card>

      <Card>
        <Card.Img variant="top" src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt12prodlp/products/p-feelings-of-love-gift-hamper-110722-m.jpg" />
        <Card.Body>
          <Card.Footer>
          <small className="text-muted">Flower in a box</small>
        </Card.Footer>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-pearls-of-prosperity-266470-m.jpg" />
        <Card.Body>
        <Card.Footer>
          <small className="text-muted">New Arrivals</small>
        </Card.Footer>
        </Card.Body>
        </Card>
      </CardGroup>
      </section>
      <br /><br />
      <center>

      <h1>OCASSIONS</h1>
  
      </center>
      <CardGroup>
        <Card>

        <Card.Img variant="top" src="https://i0.wp.com/decorsutrablog.com/wp-content/uploads/2021/10/IMG_8927-rotated.jpg?w=2340&ssl=1U" />
        <Card.Body>
        <Card.Footer>
          <small className="text-muted">Ceremonies</small>
         

        </Card.Footer>
        </Card.Body>
        </Card>
        <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoYkvESrJNayLtXNOc6Yi30Kizvr5qNkAtPw&usqp=CAU" />
        <Card.Body>
        <Card.Footer>
          <small className="text-muted">Onam</small>
        </Card.Footer>
        </Card.Body>
        </Card>
        <Card>
        <Card.Img variant="top" src="https://i0.wp.com/decorsutrablog.com/wp-content/uploads/2020/06/Decorsutra_HomeBasedEvents_blinbandwhistles-1.jpg?w=1080&ssl=1" />
        <Card.Body>
        <Card.Footer>
          <small className="text-muted">House warming</small>
        </Card.Footer>
        </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default CardsImage;