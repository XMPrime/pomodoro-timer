import React, { Component } from "react";
import { connect } from "react-redux";
import { startStopToggle } from "../actions/actions";

class StartStop extends Component {
  startStopToggle = () => {
    this.props.startStopToggle();
  };
  render() {
    return <div onClick={this.startStopToggle}>{this.props.isTicking ? "STOP" : "START"}</div>;
  }
}

const mapStateToProps = state => ({
  isTicking: state.startStopReducer.isTicking
});

const mapDispatchToProps = {
  startStopToggle
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartStop);
