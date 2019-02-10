import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./styles.css";

import Container from "../Container";

const UserLink = ({ user }) =>
  user && (
    <div className="user-link">
      <Container>
        <Link className="user-link__link" to="/user">
          Logged in as <span className="user-link__name">{user.name}</span>
        </Link>
      </Container>
    </div>
  );

UserLink.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string
  }).isRequired
};

export default UserLink;
