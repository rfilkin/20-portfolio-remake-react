import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import Body from "./components/Body";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import Footer from "./components/Footer";

import './App.css';

function App() {
  return (
    <Router>
      <Body>
        <Header />
        <Wrapper>
          <Container>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Container>
        </Wrapper>
        <Footer />
      </Body>
    </Router>
  );
}

export default App;
