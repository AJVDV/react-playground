import React, { Component } from 'react'


export default class HelloWorld extends Component {
    state = {
        who : "world",
    };
    
    render() {
      return (
        <div className="HelloWorld">
          <p>Hello, {this.state.who}!</p>
          <button
            onClick={ () => this.setState({who:"friend"}) }
          >
            friend!
          </button>
          <button
            onClick={ () => this.setState({who:"React"}) }
          >
            React!
          </button>
          <button
            onClick={ () => this.setState({who:"world"}) }
          >
            world!
          </button>
        </div>
      )
    }
  }
