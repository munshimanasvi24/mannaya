import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  Form,
} from "react-bootstrap";

const ProductView = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  return (
    <Container className="my-5 py-5">
      <Row className="g-5">
        <Col md={6}>
          <img
            src="https://via.placeholder.com/500"
            alt="Birthday Gift"
            className="product-image img-fluid"
          />
        </Col>

        <Col md={6}>
          <h1 className="display-4 mb-4">🎁 Personalized Gift Box</h1>
          <div className="d-flex align-items-center mb-4">
            <h3 className="text-danger me-3">$49.99</h3>
            <div className="text-warning h4">★★★★★ (24 reviews)</div>
          </div>

          <div className="mb-4">
            <h5>Select Size:</h5>
            <ButtonGroup>
              {["S", "M", "L"].map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "danger" : "outline-danger"}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </ButtonGroup>
          </div>

          <div className="quantity-selector">
            <Button
              variant="outline-danger"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </Button>
            <Form.Control
              type="number"
              value={quantity}
              readOnly
              className="text-center"
              style={{ width: "70px" }}
            />
            <Button
              variant="outline-danger"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </Button>
          </div>

          <Button variant="danger" size="lg" className="w-100 py-3">
            🛒 Add to Cart - ${(49.99 * quantity).toFixed(2)}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductView;
