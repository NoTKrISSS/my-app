import { Component } from "react";

class Baloons extends Component {
  constructor(props) {
    super();
    this.state = {
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
      size: Math.trunc(Math.random() * (200 - 40 + 1) + 30),
      x: Math.trunc(Math.random() * (80 - 1 + 1) + 1),
      y: Math.trunc(Math.random() * (80 - 1 + 1) + 1),
      counter: 0,
    };
  }

  componentDidMount() {}

  click = () => {
    console.log(this.state.counter);

    this.setState({
      hide: "none",
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <>
        {this.state.counter}
        <div
          className="apskritimai"
          onClick={this.click}
          style={{
            display: this.state.hide,
            backgroundColor: this.state.color,
            width: this.state.size,
            height: this.state.size,
            top: this.state.x + "vh",
            left: this.state.y + "vw",
          }}
        ></div>
      </>
    );
  }
}

export default Baloons;
