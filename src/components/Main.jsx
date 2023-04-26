import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import Pokeinfo from './Pokeinfo'


export default function Main() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="left-content">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="right-content">
          <Pokeinfo />
        </div>
      </div>

    </div>

  )
}
