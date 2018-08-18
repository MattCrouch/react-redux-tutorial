/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./styles.css";

import Container from "../Container";

import Logo from "../../../assets/photo-share.svg";

const Header = () => (
  <header className="header">
    <Container>
      <img src={Logo} alt="Photo Share" />
    </Container>
  </header>
);

export default Header;
