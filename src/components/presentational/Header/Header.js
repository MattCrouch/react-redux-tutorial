/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import Container from "../Container";

import Logo from "../../../assets/photo-share.svg";

const Header = () => (
  <header className="header">
    <Container>
      <Link to="/">
        <img alt="Photo Share" className="header__image" src={Logo} />
      </Link>
    </Container>
  </header>
);

export default Header;
