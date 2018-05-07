import React, { Component } from 'react';
// import Charti from './Charti.jsx';
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick';
import Chart from 'chart.js';
// const serverAddress = require('../../server/serverParams.js').retServerAddress();
const pgPostUrl = '/postgres/query';

import 'whatwg-fetch';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class FetchPg extends Component {
  constructor(props) {
    super(props);
    // should change this
    this.state = {

      data: {},
    };

  }

  componentDidMount() {
    fetch('/postgres/query', {  'Access-Control-Allow-Origin': '*' })
    .then(pgData => {
      console.log('fetching data from postgres');
      return pgData.json();
    })
    .then(realData => {
      this.setState({data: realData})

    })
  }

  render() {
    const allEnvs = Object.keys(this.state.data);
    return (
      <div>
        {allEnvs.map((env, index)=> (
          <h4 className = "pietitle"> {env} Tests Coverage
          <div>
          <PieChart colors={["#6cae0e", "#b00"]} data={this.state.data[env]}/>
          </div>
          </h4>
        ))}
      </div>
    );
  }
}

export default FetchPg;
