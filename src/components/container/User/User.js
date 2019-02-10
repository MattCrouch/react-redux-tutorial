import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import UserLink from "../../presentational/UserLink";
import { loadUser } from "../../../actions";
import { getCurrentUser } from "../../../selectors";

export class UserContainer extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    return <UserLink user={this.props.user} />;
  }
}

export const mapStateToProps = state => ({
  user: getCurrentUser(state)
});

export const mapDispatchToProps = dispatch => ({
  loadUser: () => dispatch(loadUser())
});

UserContainer.propTypes = {
  loadUser: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string
  }).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
