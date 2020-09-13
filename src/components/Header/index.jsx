import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Header.scss";

function Header(props) {
  return (
    <div>
      <header className="header">
        <Container>
          <Row className="justify-content-between">
            <Col xs="auto">
              <a
                href="https://www.youtube.com/watch?v=MpD8vxfkzas&list=PLeS7aZkL6GOvCz3GiOtvtDXChJRuebb7S&index=7"
                className="header__link header__title"
                target="_blank"
                rel="noopener noreferrer"
              >
                Photo app
              </a>
            </Col>

            <Col xs="auto">
              <NavLink
                exact
                className="header__link"
                to="/photos"
                activeClassName="header__link--active"
              >
                Redux Project
              </NavLink>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default Header;
