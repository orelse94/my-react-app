import React from 'react';
import { render } from 'react-dom';
// import App from './components/App.jsx';
import EnvSetter from './components/EnvSetter.jsx';
// import PieChart from './components/PieChart.jsx';
import styles from './scss/application.scss';

render(
  <EnvSetter />,
  document.getElementById('root')
);

// render(
//   <SimpleClock />,
//   document.getElementById('pie')
// );
