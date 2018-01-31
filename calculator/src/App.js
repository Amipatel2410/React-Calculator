import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      total: 0
    };
    this.add1 = this.add1.bind(this);
  }

  add1()
  {
    this.setState({
      total: this.state.total+1
    });
  }

  render() {
    return (
      <div>
      <h1> {this.state.total} </h1>
        <button onClick={this.add1}> Add 1 </button>
      </div>
    );
  }
}

export default App;
