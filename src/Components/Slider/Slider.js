import React, { Fragment } from 'react';
import './Slider.css';
import ServerGreeting from '../SliderGreeting/ServerGreeting';
import { api } from '../../utils/config';
import ProgressiveImage from '../ProgressiveImage/ProgressiveImage';

export const Slider = props => {
  return (
    <Fragment>
      <div>
        <div className="slider">
          <figure>
            {[1, 2, 3, 4, 5].map((elem, i) => (
              <ProgressiveImage
                key={i}
                preview={`${api.baseURL}/images/slider/slider${elem}.jpg`}
                image={`${api.baseURL}/images/slider/slider${elem}.jpg`}
              />
            ))}
          </figure>
        </div>
        <ServerGreeting />
      </div>
    </Fragment>
  )
}
