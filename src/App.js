import React from 'react';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "click me"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //handler goes here
  handleClick() {
    if (this.state.text === "click me") {
       this.setState( {
          text: "thanks"
      });
    }else {
      this.setState({
        text: "click me"
      });
    }
  }


  render() {
    return (
      <div>
        <p>Greetings!</p>
        <p>Button goes here</p>
        <button onClick={this.handleClick}>{this.state.text}</button>
      </div>
    );
  }
}