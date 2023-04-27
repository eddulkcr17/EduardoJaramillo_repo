import React from "react";

const PokeInfo = ({ data }) => {
  console.log(data);
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <div className="pokemonTitle">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
              alt=""
            />
            <h2># {data.id}</h2>
            <h1>{data.name}</h1>
          </div>
          <div className="pokemonInfo">
            <div className="pokemonType">
              <h3>Types: </h3>
              {data.types.map((poke) => {
                return (
                  <>
                    <h4>{poke.type.name}</h4>
                  </>
                );
              })}
            </div>
            <div className="pokemonWeight">
              <h3>Weight</h3>
              <h4>{data.weight}</h4>
            </div>
            <div className="pokemonSprites">
              <h3>Sprites</h3>

              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${data.id}.png`}
                alt=""

              />
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${data.id}.png`}
                alt=""

              />
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
                alt=""

              />
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${data.id}.png`}
                alt=""

              />
            </div>
            <div>
              <h3>Moves: </h3>
              <div className="pokeMoves">
                {data.moves.map((poke) => {
                  return (
                    <p className="infoMoves" >
                      / {poke.move.name}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PokeInfo;
