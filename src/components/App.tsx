import React from "react";
import {
  Header,
  Home,
  Footer,
  About,
  Education,
  Experience,
  Projects,
  Contact,
} from "../sections";
import { Row, Col, Container } from "react-bootstrap";
import ScrollTopArrow from "./ScrollTopArrow";

import "../components/Icons";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Container>
          <Row>
            <Col md={6}>
              <Experience />
            </Col>
            <Col md={6}>
              <Education />
            </Col>
          </Row>
        </Container>
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollTopArrow />
    </>
  );
}

export default App;
