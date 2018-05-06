import React, { Component } from 'react';
const returnEnv = () => {return 'ui';}
import Clock from './Clock.jsx';
import TopOfPage from './TopOfPage.jsx';
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
      <TopOfPage />
      <h2>This pie chart is presenting {this.state.env} test enviroment.</h2>
      <FetchPg />
      </div>
    );
  }
}

export default EnvSetter;
