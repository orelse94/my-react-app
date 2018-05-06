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
      data: ['ui','api'],
      data2: {ui:[["Fail","68"],["Pass","450"]],api:[["Pass","4"],["Fail","1"]]} ,
    };

  }

  componentWillMount() {

    // this fetch isnt working now

    fetch('/postgres/query', {  'Access-Control-Allow-Origin': '*' })
    .then(pgData => {
      console.log('2 fetching no cors');
      console.log({pgData});
      return pgData.json();
    })
    .then(realData => {
      console.log('3 fetching realData ');

      this.setState({data: realData})
    })
  }


  render() {
      return (<div>
      {this.state.people.map((person, index) => (
          <p>Hello, {person.name} from {person.country}!</p>
      ))}
      </div>);
  }


  render() {
    return (
      <div>
      {this.state.data.map((env,index) => (
        <PieChart data={this.state.data2[env]}/>
      ))
      }
      </div>);
  }
}

export default FetchPg;
