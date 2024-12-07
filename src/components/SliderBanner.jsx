import React from 'react';
import './SliderBanner.css';
import sliderbanner from '../assets/sliderbanner.png';
import slider_icon from '../assets/slider_icon.png';
import twitter from '../assets/twitter.png';
import google from '../assets/google.png';
import linkdin from '../assets/linkdin.png';
import banner_head_txt from '../assets/banner_head_txt.png';

export default function SliderBanner(){
  return (
    <section id='sliderbanner'>
      <div class="slider">
        <img src={sliderbanner} alt="sliderbanner" class="slider_banner slider_image" />
        <img src={slider_icon} alt='slider-icon' class="slider_icon slider_image" />
        <img src={twitter} alt='twitter' class="twitter slider_image" />
        <img src={google} alt='google' class="google slider_image" />
        <img src={twitter} alt='twitter_left' class="twitter_left slider_image" />
        <img src={google} alt='google_left' class="google_left slider_image" />
        <img src={linkdin} alt='linkdin' class="linkdin slider_image" />
        <img src={banner_head_txt} alt='banner_head_txt' class="banner_head_txt slider_image" />
        <p class="slider_image banner_subtxt">Test ankita Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div class="button banner_button">
          <button type='button' class="btn btn_secondary signup">Create Account</button>
          <button type='button' class="btn btn_primary explore_job_page">Expolre Job Page</button>
        </div>
      </div>
    </section>
  )
}
