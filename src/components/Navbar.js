import React from 'react'
import './navbar.css'
export default function navbar() {
  return (
<>
    <header>
      <div className="navbar">

        {/* Logo */}
        <div className="nav-header">
          <div className="nav-logo">
            {/* <i className="fa-solid fa-bars-sort options-menu"></i> */}
            <img
              src="https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/logo1_rg97i6.png"
              alt="Hack NITR 4.0"
            />
          </div>
        </div>

        {/* responsive button */}
        <input type="checkbox" id="nav-check"/>
        <div class="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        {/* navbar items */}
        <div className="nav_links options">
          <a href="/">Prizes</a>
          <a href="/">Moments</a>
          <a href="/">Speakers</a>
          <a href="/">Tracks</a>
          <a href="/">Sponsors</a>
          <a href="/">FAQ</a>
          <a href="/">Contact</a>
          <a href="/">Frame</a>
          <a href="/">Live</a>
          {/* <ul>
            <li>
              Prizes
            </li>
            <li>
              Moments
            </li>
            <li>
              Speakers
            </li>
            <li>
              Tracks
            </li>
            <li>
              Sponsors
            </li>
            <li>
              FAQ
            </li>
            <li>
              Contact
            </li>
            <li>
              Frame
            </li>
            <li>
              Live
            </li>
          </ul> */}
        </div>
      </div>
    </header>
</>
  )
}
