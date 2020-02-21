import React, { Component } from "react";
import { connect } from "react-redux";
import { reset } from "../actions/actions";

class Reset extends Component {
  reset = () => {
    this.props.reset();
  };
  render() {
    return <div onClick={this.reset}>RESET</div>;
  }
}

const mapStateToProps = state => ({
  reset: state.timeSetterReducers.reset
});

const mapDispatchToProps = {
  reset
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reset);
