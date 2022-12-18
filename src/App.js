import React, { useState } from 'react';
import './App.css'
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import About from './section/About';
import Feedback from './section/Feedback';
import Hero from './section/Hero';
import HowWork from './section/HowWork';
import Insight from './section/Insight';
import Map from './section/Map';
import TheWorld from './section/TheWorld';
import WhatNew from './section/WhatNew';

const App = () => {
  const [current, setCurrent] = useState(1)

  return (
    <div className='bg-primary-black'>
      <Navbar/>
      <Hero/>
      <About/>
      <TheWorld current={current} setCurrent={setCurrent}/>
      <HowWork/>
      <WhatNew/>
      <Map/>
      <Insight/>
      <Feedback/>
      <Footer/>
    </div>
  );
};

export default App;