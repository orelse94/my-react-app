import React, { Component } from 'react';
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick';
import Chart from 'chart.js';

const data = {
  ui : [["Failed", 10], ["Passed", 90]],
  api : [["Failed", 10], ["Passed", 40]]
};

class Charti extends Component {
  // addAdapter(Chart)
   render() {
     return (
       
       <div>
        <PieChart data={data.ui} />
       </div>
     )
   }
 }

export default Charti;
