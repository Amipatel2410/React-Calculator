import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      total: 0
    };
    this.add1 = this.add1.bind(this);
    this.add5 = this.add5.bind(this);
    this.sub1 = this.sub1.bind(this);
    this.reset = this.reset.bind(this);
  }

  add1()
  {
    this.setState({
      total: this.state.total+1
    });
  }

  add5()
  {
    this.setState({
      total: this.state.total+5
    });
  }

  sub1()
  {
    this.setState({
      total: this.state.total-1
    });
  }

  reset()
  {
    this.setState({
      total: 0
    });
  }

  render() {
    return (
      <div>
      <h1> {this.state.total} </h1>
        <button onClick={this.add1}> Add 1 </button>
        <button onClick={this.add5}> Add 5 </button>
        <button onClick={this.sub1}> Sub -1 </button>
        <button onClick={this.reset}> Reset </button>
      </div>
    );
  }
}

export default App;
