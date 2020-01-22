import React from 'react';
import './Tabs/Style/Header.css';

function Header() {
  return (
    <header>
    <div id = "headerdiv"><h1>KaWa Hotel</h1>
    <ul>
        <li><a href="/hotel">Home</a></li>
        <li><a href="/location">Location</a></li>
        <li><a href="/photos">Photos</a></li>
        <li><a href="/aboutus">About Us</a></li>
        <li><a href="/contactus">Contact Us</a></li>
        <li><a href="/reviews">Reviews</a></li>
    </ul>
</div>
</header>
  );
}

export default Header;
