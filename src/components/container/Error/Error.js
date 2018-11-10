import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { loadGallery } from "../../../actions";
import Error from "../../presentational/Error";

export const ErrorContainer = props => <Error {...props} />;

export const mapDispatchToProps = dispatch => ({
  loadGallery: () => dispatch(loadGallery())
});

ErrorContainer.propTypes = {
  loadGallery: PropTypes.func.isRequired
};

export default connect(
  undefined,
  mapDispatchToProps
)(ErrorContainer);
