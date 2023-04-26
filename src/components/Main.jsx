import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import Pokeinfo from './Pokeinfo'
import Footer from './Footer'

export default function Main() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="left-content">
          <Card />
        </div>
        <div className="right-content">
          <Pokeinfo />
        </div>
      </div>
      <div className='footer-content'>
        <Footer />
      </div>

    </div>

  )
}
