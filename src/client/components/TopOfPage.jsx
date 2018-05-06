import React, { Component } from 'react';
//import { Picture } from 'react-responsive-picture';
import Clock from './Clock.jsx';

class TopOfPage extends Component {
  render () {
    return (

      <div  style={{ backgroundImage: 'url(../pictures/topPic.jpg)' }}>
      <Clock />
      // <Picture src = '../pictures/topPic.jpg'/>
      </div>
    );
  }
}

export default TopOfPage;
