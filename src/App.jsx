import React, { Component } from "react";
import "./App.css";
import Clock from "./Clock";
import { Form, FormControl, Button } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "Decemeber 28, 2018",
      newDeadLine: ""
    };
  }

  changeDeadline() {
    this.setState({ deadline: this.state.newDeadLine });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline} />
        <Form>
          <FormControl
            className="Deadline-input"
            placeholder="new date"
            onChange={e => this.setState({ newDeadLine: e.target.value })}
          />
          <Button
            className="btn btn-secondary"
            onClick={() => this.changeDeadline()}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
export default App;