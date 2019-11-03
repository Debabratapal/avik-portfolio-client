import React, { Fragment } from 'react';
import './Slider.css';
import ServerGreeting from '../SliderGreeting/ServerGreeting';
import { api } from '../../utils/config';

export const Slider = props => {
  return (
    <Fragment>
      <div>
        <div className="slider">
          <figure>
            {[1, 2, 3, 4, 5].map((elem, i) => (
              <img key={i} src={`${api.baseURL}/images/slider/slider${elem}.jpg`}
                className="section__sec1"
                alt={`img${i}.jpg`} />
            ))}
          </figure>
        </div>
        <ServerGreeting />
      </div>
    </Fragment>
  )
}
