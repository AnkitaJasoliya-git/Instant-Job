import React from 'react';
import Header from './components/Header';
import SliderBanner from './components/SliderBanner';

export default function App() {
  return (
    <section id='main'>
      <section id='header'>
        <Header/>
      </section>
      <section id='hero-section'>
        <SliderBanner/>
      </section>
    </section>
  )
}
