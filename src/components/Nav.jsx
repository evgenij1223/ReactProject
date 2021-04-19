import React from 'react';
import classes from './Nav.module.sass';

const Nav = () => {
  return (
    <nav className = {classes.nav} >
      <ul>
        <li><a href="#" className = {classes.item}>Profile</a></li>
        <li><a href="#" className = {classes.item}>Messages</a></li>
        <li><a href="#" className = {classes.item}>News</a></li>
        <li><a href="#" className = {classes.item}>Music</a></li>
        <li><a href="#" className = {classes.item}>Settings</a></li>
      </ul>
    </nav>
  );
}

export default Nav;