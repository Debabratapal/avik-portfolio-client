import React, { Fragment } from 'react';
import './PortfolioCard.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import {Link} from 'react-router-dom';
import {api} from '../../utils/config'

const PortfolioCard = () => (
  <Fragment>
    <div className="container portfolio">
      <SectionHeader
        header="portfolio"
        description="Our portfolio is the best way to show our work, you can see here a big range of our work. Check them all and you will find what you are looking for."
      />
      <div className="row">
        {['Creative','Bold','Calm'].map((el, i) => (
          <div className="col" key={el}>
            <Link to={"/gallery/"+(i+1)}>
              <img src={api.baseURL+'/images/card/port'+(i+1)+'.jpeg'} alt="port1.jpeg"/>
              <div className="content">
                <h2>{el}</h2>
              </div>
            </Link>
          </div>
        ))}  
      </div>
    </div>
  </Fragment >
)

export default PortfolioCard;