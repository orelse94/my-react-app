import React, { Component } from 'react';
const returnEnv = () => {return 'ui';}
import Clock from './Clock.jsx';
// import Charti from './Charti.jsx';
import FetchPg from './FetchPg.jsx';



class EnvSetter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      env: 'api',
    }
  }

    componentWillMount() {
      this.whichEnv =  this.changeEnv();
    }


    changeEnv() {
      this.setState({
        env: returnEnv()
      });
    }


  render() {
    return (
      <div>
      <Clock />
      <h2>This pie chart is presenting {this.state.env} test enviroment.</h2>
      <FetchPg />
      </div>
    );
  }
}

export default EnvSetter;
