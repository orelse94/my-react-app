import React, { Component } from 'react';
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick';
import Chart from 'chart.js';
import FetchPg from './FetchPg.jsx';


const data = {
  ui : [["Failed", 10], ["Passed", 90]],
  api : [["Failed", 10], ["Passed", 40]]
};

class Charti extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data ,
    }
  }

   render() {
     return (

       <div>
        <PieChart data={data.api} />,
       </div>
     )
   }
 }

export default Charti;
