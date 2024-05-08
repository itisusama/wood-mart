import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const CustomerTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "The quality of the furniture is exceptional, and the customer service was top-notch. I'm thrilled with my purchase!",
      author: "John Doe",
      title: "Satisfied Customer",
      image: "https://i.pravatar.cc/100?img=3",
      backgroundColor: "#f8f9fa"
    },
    {
      id: 2,
      quote: "I've been a customer for years, and I keep coming back because the furniture is durable and the prices are unbeatable.",
      author: "Jane Smith",
      title: "Loyal Customer",
      image: "https://i.pravatar.cc/100?img=5",
      backgroundColor: "#e9ecef"
    },
    {
      id: 3,
      quote: "The selection of furniture is impressive, and the design team helped me find the perfect pieces for my home. Lorem",
      author: "Michael Johnson",
      title: "Designer",
      image: "https://i.pravatar.cc/100?img=8",
      backgroundColor: "#d1ecf1"
    }
  ];

  return (
    <Container className="customer-testimonials mb-2">
      <h2 className="text-center mt-5 font-1"><strong>What Our Customers Say</strong></h2>
      <Row>
        {testimonials.map((testimonial) => (
          <Col key={testimonial.id} md={4}>
            <Card className="testimonial-card mt-3 " style={{ backgroundColor: testimonial.backgroundColor }}>
              <Card.Body>
                <img src={testimonial.image} alt={testimonial.author} className="testimonial-image" style={{borderRadius: '50%'}} />
                <blockquote className="blockquote mb-0">
                  <p>{testimonial.quote}</p>
                  <footer className="blockquote-footer">
                    {testimonial.author}, <cite title="Source Title">{testimonial.title}</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CustomerTestimonials;