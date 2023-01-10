import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), count: 0 };
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
      this.setCount();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  setCount() {
    this.setState((state) => ({
      count: state.count === 60 ? 1 : state.count + 1,
    }));
  }
  render() {
    return (
      <div>
        <h5>It is {this.state.date.toLocaleTimeString()}.</h5>
        <h6>Re-counter reaching 60 times: {this.state.count}.</h6>
      </div>
    );
  }
}
export default Clock;
