import React, { Component, Fragment } from 'react';
import img1 from '../../assets/img1.jpeg';
import img2 from '../../assets/img2.jpeg';
import img3 from '../../assets/img3.jpeg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import './Slider.css';
import ServerGreeting from '../SliderGreeting/ServerGreeting';

class Slider extends Component {


  render() {
    return (
      <Fragment>
        <div>
          <div className="slider">
            <figure>
              <img src={img1} className="section__sec1" alt="img1" />
              <img src={img2} className="section__sec1" alt="img2"/>
              <img src={img3} className="section__sec1" alt="img3"/>
              <img src={img4} className="section__sec1" alt="img4"/>
              <img src={img5} className="section__sec1" alt="img5"/>
            </figure>
          </div>
        
          <ServerGreeting />
        </div>
      </Fragment>
    )
  }
}

export default Slider;