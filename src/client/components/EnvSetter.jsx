import React, { Component } from 'react';
const returnEnv = () => {return 'ui';}
import TopOfPage from './TopOfPage.jsx';
// import Charti from './Charti.jsx';
import FetchPg from './FetchPg.jsx';



class EnvSetter extends Component {
  constructor(props) {
    super(props);


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
      <FetchPg />
      </div>
    );
  }
}

export default EnvSetter;
