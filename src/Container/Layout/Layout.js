import React, {Fragment} from 'react';

import Header from '../../Components/Header/Header';
import Slider from '../../Components/Slider/Slider';
import About from '../../Components/About/About';
import PortfolioCard from '../../Components/PortfolioCard/PortfolioCard';

const Layout = () => (
  <Fragment>
    <Header />
    <Slider />
    <About />
    <PortfolioCard />
  </Fragment>
)

export default Layout;