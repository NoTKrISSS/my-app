import { Component } from "react";
import Baloons from "./Components/Baloons";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handlescore = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div className="container">
        <div>{this.state.count}</div>
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
        <Baloons handlescore={this.handlescore} />
      </div>
    );
  }
}

export default App;
