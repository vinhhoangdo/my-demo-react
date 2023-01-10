// function Wellcome(props) {
//   return <h1>Hello, {props.name}</h1>;

import { Component } from "react";

// }
class Wellcome extends Component {
  render() {
    return <h4>Hello, {this.props.name}</h4>;
  }
}

export default Wellcome;
