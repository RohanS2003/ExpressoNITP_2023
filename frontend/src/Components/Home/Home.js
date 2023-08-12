import React from 'react';
import './Home.css';
import AutomaticSlideshow from './AutomaticSlideshow';

import Svg1 from '../SVG/svg1.svg'
import Gallery from '../Gallery/Gallery'
import AboutUs from '../AboutUs/AboutUs'

const Home = () => {
  return (
    <div className='HomePage-GrandParent'>
    <div className='slide'>
        <AutomaticSlideshow/>
    </div>
        
      <div className="HomePage-Parent">
        <div className='HomePage-layer1'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#773f1a" fillOpacity="1" d="M0,160L360,0L720,224L1080,192L1440,32L1440,320L1080,320L720,320L360,320L0,320Z"></path>
          </svg>
        </div>
      </div>


      <div>
        <Gallery />
      </div>
      <div>
        <AboutUs />
      </div>
    </div>
  );
};

export default Home;
