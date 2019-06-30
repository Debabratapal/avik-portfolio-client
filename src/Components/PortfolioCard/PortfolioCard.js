import React, { Fragment } from 'react';
import './PortfolioCard.css';

import port1 from '../../assets/port1.jpeg';
import port2 from '../../assets/port2.jpeg';
import port3 from '../../assets/port3.jpeg';
import SectionHeader from '../SectionHeader/SectionHeader';

const PortfolioCard = () => (
  <Fragment>
    <div class="container portfolio">
      <SectionHeader 
        header="portfolio"
        description="Our portfolio is the best way to show our work, you can see here a big range of our work. Check them all and you will find what you are looking for."
      />

      <div class="row">

        <div class="col">
          <img src={port1} alt="port1"/>
          <div class="content">
            <h2>Creative</h2>
          </div>
        </div>

        <div class="col">
          <img src={port2} alt="port2"/>
          <div class="content">
            <h2>Bold</h2>
          </div>
        </div>

        <div class="col">

          <img src={port3} alt="port3"/>

          <div class="content">
            <h2>Calm</h2>
          </div>

        </div>

      </div>

    </div>
  </Fragment >
)

export default PortfolioCard;