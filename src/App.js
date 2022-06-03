import React from "react";
import "./App.css";
import { Button, Alert, Accordion, Badge, ButtonGroup, Carousel } from "react-bootstrap";

let App = () => {
  return (
    <>
      <h2>App Component</h2>
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
      <Alert variant="success" className="mt-4 mb-4">
        This is a <Alert.Link href="#">examples link</Alert.Link>
      </Alert>
      {[
        "primary",
        "secondary",
        "success",
        "danger",
        "dark",
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}


      {/* Accordians */}

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>


{/* badge */}

      <div>
        <h1>
          Example heading <Badge bg="secondary">New</Badge>
        </h1>
        <h2>
          Example heading <Badge bg="primary">Premium</Badge>
        </h2>
        <h3>
          Example heading <Badge bg="secondary">New</Badge>
        </h3>
      </div>


      {/* button group */}

      <ButtonGroup aria-label="Basic example" className="mt-5 mb-5">
        <Button variant="secondary">Left</Button>
        <Button variant="danger">Middle</Button>
        <Button variant="success">Right</Button>
      </ButtonGroup>


      {/* carousel */}

    <Carousel style={{marginTop: "100px", marginBottom: "100px"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/1000/500"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/1000/500"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/1000/500"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </>
  );
};

export default App;
