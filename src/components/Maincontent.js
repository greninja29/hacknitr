import React from 'react'
import './Maincontent.css'
import Discordbutton from './Discordbutton'
export default function Maincontent() {
  return (
    <div>
      <main>
      <div className="container">
        <div className="head-content">
          <div>
            <h1>HackNITR 4.0</h1>
            <h3>IDEATE.IMPLEMENT.INNOVATE</h3>
            <img
              className="event-calender"
              src="https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/Group_105_ymghqp.png"
              alt="pic representing dates of the HackNITR Hackathon happening from 28-31 October 2022"
            />
            <p>
              Dive deep into your innovation journey with HackNITR 4.0 and
              manifest your skills .
            </p>
            <Discordbutton/>
          </div>
          <div className="side-image">
            <img
              className="side-img"
              src="https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/Illustartion_vjqumg.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
    </div>
  )
}
