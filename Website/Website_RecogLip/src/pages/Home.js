import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/lipbanner.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home" style={{backgroundImage:`url(${BannerImage})`}}>
      <div className="headerContainer">
        <h1>RecogLip</h1>
        <p>Sentence Level Lip-Reading</p>
        <Link to='/menu'>
        <button>Train your lips</button>
        </Link>
      </div>
    </div>
  )
}

export default Home;
