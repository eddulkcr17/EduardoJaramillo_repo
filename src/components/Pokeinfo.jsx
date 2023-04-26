import React from 'react'

export default function Pokeinfo() {
  return (
    <div> <div className="pokemonTitle">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg`}
        alt=""
      />
      <h2># 1</h2>
      <h1>Pikachu</h1>
    </div>
      <div className="pokemonInfo">
        <div className="pokemonType">
          <h3>Types: </h3>

          <h4>Electrico</h4>

        </div>
        <div className="pokemonWeight">
          <h3>Weight</h3>
          <h4>20 kg</h4>
        </div>
        <div className="pokemonSprites">
          <h3>Sprites</h3>

          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png`}
            alt=""

          />
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png`}
            alt=""

          />
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png`}
            alt=""

          />
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png`}
            alt=""

          />
        </div>
        <div>
          <h3>Moves: </h3>
          <div className="pokeMoves">

            <p className="infoMoves" >
              / atacktrueno
            </p>
          </div>
        </div>
      </div></div>
  )
}
