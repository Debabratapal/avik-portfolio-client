import React from 'react';
import { Slider } from '../Components/Slider/Slider';
import { About } from '../Components/About/About';
import { PortfolioCard } from '../Components/PortfolioCard/PortfolioCard';
import { Layout } from './Layout';

export const Home = props => {
  return (
   <Layout>
     <Slider />
     <About />
     <PortfolioCard />
   </Layout>
  )
}

export default Home;
