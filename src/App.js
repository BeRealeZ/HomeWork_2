import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      square1: "red",
      square2: "blue",
    };
  }

SquareOnClick = () => {
    this.setState((prevState) => ({
      square1: prevState.square2,
      square2: prevState.square1,
    }));
  };

  render() {
    return (
      <div className='squares'>
        <Square
          color={this.state.square1}
          onClick={this.SquareOnClick}
        />
        <Square
          color={this.state.square2}
          onClick={this.SquareOnClick}
        />
      </div>
    );
  }
}

class Square extends React.Component {
  render() {
    return (
      <div
        className='square'
        style={{ backgroundColor: this.props.color }}
        onClick={this.props.onClick}>
      </div>
    );
  }
}

export default App;