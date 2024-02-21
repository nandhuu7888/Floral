import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {FaShoppingCart} from 'react-icons';

const productsData = [
  
    {
      id: 1,
      name: ' Roses ',
      category: 'Roses',
      price: '$25.00',
      image: 'https://images.pexels.com/photos/1233414/pexels-photo-1233414.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Beautiful red roses perfect for any occasion.'
    },
    {
      id: 2,
      name:  'Roses 2',
      category: 'Roses',
      price: '$20.00',
      image: 'https://ediblebloglive.wpengine.com/wp-content/uploads/2020/09/Camellia-min.jpg',
      description: 'Lovely red roses that brighten up your day.'
    },
    {
      id: 3,
      name: 'Roses 3',
      category: 'Roses',
      price: '$22.00',
      image: 'https://images.pexels.com/photos/67567/bridal-bouquet-bride-bridal-bouquet-67567.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Gorgeous red roses to express your feelings.'
    },
    {
      id: 4,
      name: ' Roses 1',
      category: 'Roses',
      price: '$25.00',
      image: 'https://images.pexels.com/photos/617965/pexels-photo-617965.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Beautiful red roses perfect for any occasion.'
    },
    {
      id: 5,
      name:  'Roses 2',
      category: 'Roses',
      price: '$20.00',
      image: 'https://images.pexels.com/photos/2858115/pexels-photo-2858115.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Lovely red roses that brighten up your day.'
    },
    {
      id: 6,
      name: 'Roses 3',
      category: 'Roses',
      price: '$22.00',
      image: 'https://images.pexels.com/photos/4899539/pexels-photo-4899539.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Gorgeous red roses to express your feelings.'
    },
    {
      id: 7,
      name: ' Roses 1',
      category: 'Roses',
      price: '$25.00',
      image: 'https://images.pexels.com/photos/19414876/pexels-photo-19414876/free-photo-of-decorative-flower-arrangement.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Beautiful red roses perfect for any occasion.'
    },
    {
      id: 8,
      name:  'Roses 2',
      category: 'Roses',
      price: '$20.00',
      image: 'https://images.pexels.com/photos/5759234/pexels-photo-5759234.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Lovely red roses that brighten up your day.'
    },
    {
      id: 9,
      name: 'Roses 3',
      category: 'Roses',
      price: '$22.00',
      image: 'https://images.pexels.com/photos/247697/pexels-photo-247697.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Gorgeous red roses to express your feelings.'
    },
    {
      id: 10,
      name: ' Roses 1',
      category: 'Roses',
      price: '$25.00',
      image: 'https://images.pexels.com/photos/11540348/pexels-photo-11540348.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Beautiful red roses perfect for any occasion.'
    },
    {
      id: 11,
      name:  'Roses 2',
      category: 'Roses',
      price: '$20.00',
      image: 'https://images.pexels.com/photos/5976328/pexels-photo-5976328.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Lovely red roses that brighten up your day.'
    },
    {
      id: 12,
      name: 'Roses 3',
      category: 'Roses',
      price: '$22.00',
      image: 'https://images.pexels.com/photos/18721800/pexels-photo-18721800/free-photo-of-branch-of-roses-by-the-pavement.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Gorgeous red roses to express your feelings.'
    },
    {
      id: 13,
      name: ' Roses 1',
      category: 'Boquets',
      price: '$25.00',
      image: 'https://images.pexels.com/photos/4904663/pexels-photo-4904663.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Beautiful red roses perfect for any occasion.'
    },
    {
      id: 14,
      name:  'Roses 2',
      category: 'Boquets',
      price: '$20.00',
      image: 'https://images.pexels.com/photos/10074450/pexels-photo-10074450.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Lovely red roses that brighten up your day.'
    },
    {
      id: 15,
      name: 'Roses 3',
      category: 'Boquets',
      price: '$22.00',
      image: 'https://images.pexels.com/photos/931154/pexels-photo-931154.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Gorgeous red roses to express your feelings.'
    },
    {
      id: 16,
      name: 'Roses 3',
      category: 'Boquets',
      price: '$22.00',
      image: 'https://images.pexels.com/photos/931151/pexels-photo-931151.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Gorgeous red roses to express your feelings.'
    },
    {
      id: 17,
      name: 'Roses 3',
      category: 'Boquets',
      price: '$22.00',
      image: 'https://images.pexels.com/photos/6641364/pexels-photo-6641364.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Gorgeous red roses to express your feelings.'
    },
    {
      id: 18,
      name: 'Roses 3',
      category: 'Boquets',
      price: '$22.00',
      image: 'https://images.pexels.com/photos/916344/pexels-photo-916344.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Gorgeous red roses to express your feelings.'
    }, {
      id: 19,
      name: 'Roses 3',
      category: 'Decorations',
      price: '$22.00',
      image: 'https://images.pexels.com/photos/9816246/pexels-photo-9816246.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Gorgeous red roses to express your feelings.'
    },
    {
      id: 20,
      name: 'Roses 3',
      category: 'Decorations',
      price: '$22.00',
      image: 'https://images.pexels.com/photos/5414010/pexels-photo-5414010.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Gorgeous red roses to express your feelings.'
    },
    {
      id: 21,
      name: 'Roses 3',
      category: 'Decorations',
      price: '$22.00',
      image: 'https://images.pexels.com/photos/5409768/pexels-photo-5409768.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Gorgeous red roses to express your feelings.'
    },
    {
      id: 22,
      name: 'Roses 3',
      category: 'Decorations',
      price: '$22.00',
      image: 'https://images.pexels.com/photos/16120231/pexels-photo-16120231/free-photo-of-dessert-table-decorated-with-pink-flowers.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Gorgeous red roses to express your feelings.'
    },
    {
      id: 23,
      name: 'Roses 3',
      category: 'Decorations',
      price: '$22.00',
      image: 'https://images.pexels.com/photos/2306286/pexels-photo-2306286.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Gorgeous red roses to express your feelings.'
    },
    {
      id: 24,
      name: 'Roses 3',
      category: 'Decorations',
      price: '$22.00',
      image: 'https://images.pexels.com/photos/169207/pexels-photo-169207.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Gorgeous red roses to express your feelings.'
    },
    {
      id: 25,
      name: 'Roses 3',
      category: 'Garlands',
      price: '$22.00',
      image: 'https://images.pexels.com/photos/19113513/pexels-photo-19113513/free-photo-of-bride-in-round-sunglassea-garland-of-flowers-and-lei.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Gorgeous red roses to express your feelings.'
    },
    {
      id: 26,
      name: 'Roses 3',
      category: 'Garlands',
      price: '$22.00',
      image: 'https://images.pexels.com/photos/18881610/pexels-photo-18881610/free-photo-of-a-traditional-indian-wedding.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Gorgeous red roses to express your feelings.'
    },
    {
      id: 27,
      name: 'Roses 3',
      category: 'Garlands',
      price: '$22.00',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOdQjJQOjwT8D4pZ3OgTbBtXV-doNPOlZ4w&usqp=CAU',
      description: 'Gorgeous red roses to express your feelings.'
    },
    {
      id: 28,
      name: 'Babyshower',
      category: 'ocassions',
      price: '$22.00',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOdQjJQOjwT8D4pZ3OgTbBtXV-doNPOlZ4w&usqp=CAU',
      description: 'Gorgeous red roses to express your feelings.'
    },{
      id: 28,
      name: 'Babyshower',
      category: 'ocassions',
      price: '$22.00',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOdQjJQOjwT8D4pZ3OgTbBtXV-doNPOlZ4w&usqp=CAU',
      description: 'Gorgeous red roses to express your feelings.'
    },
  ];
  export default function Product() {
    const [showCategories, setShowCategories] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
  
    const handleCategoryToggle = () => {
      setShowCategories(!showCategories);
    };
  
    const handleCategorySelect = (category) => {
      setSelectedCategory(category);
      setShowCategories(false); // Hide categories after selection
    };
  
    return (
      <>
        <div className='categories'>
          <Button variant="Black" onClick={handleCategoryToggle}>
            Show Categories
          </Button>
          {showCategories && (
            <div>
              <Button
                variant="outline-success"
                onClick={() => handleCategorySelect('Roses')}
                style={{ marginRight: '10px' }}
              >
                Roses
              </Button>
             
              <Button
              variant="outline-success"
              onClick={() => handleCategorySelect('Boquets')}
              style={{ marginRight: '10px' }}
            >
            Boquets
            </Button>
            <Button
              variant="outline-success"
              onClick={() => handleCategorySelect('Decorations')}
              style={{ marginRight: '10px' }}
            >
          Decorations
            </Button>
            <Button
              variant="outline-success"
              onClick={() => handleCategorySelect('Garlands')}
              style={{ marginRight: '10px' }}
            >
           Garlands
            </Button>
            <Button
              variant="outline-success"
              onClick={() => handleCategorySelect('ocassions')}
              style={{ marginRight: '10px' }}
            >
           ocassions
            </Button>
            </div>
        

          )}
        </div>
  
        <div className='pro'>
          <div className='heading'>
            <center>
              <h1>{selectedCategory || 'All Products'}</h1>
            </center>
            <Row style={{
              width: '80%',
              marginLeft: '10%',
              marginTop: '45px'
            }}>
              {productsData
                .filter((product) => !selectedCategory || product.category === selectedCategory)
                .map((product) => (
                  <Col key={product.id} xs={12} sm={6} md={4}>
                    <Card style={{ width: '18rem', marginBottom: '20px' }}>
                      <Card.Img variant="top" src={product.image} />
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <div className='price'>{product.price}</div>
                        <div className='quantity'>
                          <span>Quantity : </span>
                          <input type="number" min='1' max='1000' value='1' />
                        </div>
                        <Button variant="primary">
                        Add To Cart 
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </div>
        </div>
      </>
    )
  }
  


