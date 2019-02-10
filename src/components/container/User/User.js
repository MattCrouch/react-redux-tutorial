import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadUser } from "../../../actions";

export class UserContainer extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    return null;
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({
  loadUser: () => dispatch(loadUser())
});

UserContainer.propTypes = {
  loadUser: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
