import React, { Fragment } from 'react';
import './About.css';


import about1 from '../../assets/about1.jpeg';
import about2 from '../../assets/about2.jpeg';
import about3 from '../../assets/about3.jpeg';
import about4 from '../../assets/about4.jpeg';

const About = () => (
  <Fragment>
    <div className="container about">
        <header className="header_about">
          <h1>About</h1>
          <p>
            A creative agency based on Candy Land, ready to boost your business with some beautifull templates. Lattes        Agency is one of the best in town see more you will be amazed.
       </p>
        </header>
        {/* <figure> */}
        <div className="about_content">
          <div className="about_col">
            <img src={about1} alt="img1" />
            <div className="content">
              <h2>photography</h2>
            </div>
          </div>
          <div className="about_col">
            <img src={about2}  alt="img2" />
            <div className="content">
              <h2>Web Development</h2>
            </div>
          </div>
          <div className="about_col">
            <img src={about3} alt="img3" />
            <div className="content">
              <h2>ui/ux design</h2>
            </div>
          </div>
          <div className="about_col">
            <img src={about4} alt="img4" />
            <div className="content">
              <h2>Visualization</h2>
            </div>
          </div>
         

        </div>
        {/* <img src={img3} className="section__sec1" alt="img3" />
        <img src={img4} className="section__sec1" alt="img4" />
        <img src={img5} className="section__sec1" alt="img5" /> */}
      {/* </figure> */}
      </div>
     
  
  </Fragment>



)

export default About;