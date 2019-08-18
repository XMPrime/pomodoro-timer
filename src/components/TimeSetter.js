import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementWork, decrementWork, incrementBreak, decrementBreak } from "../actions/actions";

class TimeSetter extends Component {
  incrementWork = () => {
    this.props.incrementWork();
  };
  decrementWork = () => {
    this.props.decrementWork();
  };
  incrementBreak = () => {
    this.props.incrementBreak();
  };
  decrementBreak = () => {
    this.props.decrementBreak();
  };

  render() {
    console.log(this.props);

    return (
      <div>
        <h1>{this.props.name}</h1>
        <span name={`+${this.props.name}`} onClick={this.props.name === "Work Time" ? this.incrementWork : this.incrementBreak}>
          +
        </span>

        {this.props.name === "Work Time" ? this.props.workTime : this.props.breakTime}

        <span name={`-${this.props.name}`} onClick={this.props.name === "Work Time" ? this.decrementWork : this.decrementBreak}>
          -
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  workTime: state.workTime,
  breakTime: state.breakTime
});

const mapDispatchToProps = {
  incrementWork,
  decrementWork,
  incrementBreak,
  decrementBreak
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeSetter);
