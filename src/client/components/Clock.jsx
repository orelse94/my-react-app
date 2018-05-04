import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {date: new
      Date(),
      }
  }

  componentDidMount() {
    this.timeId = setInterval(
      () => this.thick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  thick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2> Hello! the time is - {this.state.date.toLocaleTimeString()}.
        </h2>
      </div>
    );
  }
}

export default Clock;
