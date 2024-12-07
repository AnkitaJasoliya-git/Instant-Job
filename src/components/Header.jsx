import React from 'react';
import logo from '../assets/logo.png';
import './Header.css';

export default function Header(){
  return(
    <header class="navbar">
      <div class="inner_navbar">
        <div class="logo">
          <img src={logo} alt="logo" />
        </div>
        <div class="menu">
          <a href=''>Home</a>
          <a href=''>Training</a>
          <a href=''>Employers</a>
          <a href=''>Ablout Us</a>
          <a href=''>Blog</a>
        </div>
        <div class="buttons"> 
          <button type='button' class="btn btn_transparent signin">Sign In</button>
          <button type='button' class="btn btn_secondary get-started">Get Strated</button>
        </div>
      </div>
    </header>
  )
}