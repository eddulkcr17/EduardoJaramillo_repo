import React, { useEffect, useState } from 'react'
import Card from './Card';
import PokeInfo from './Pokeinfo';
import axios from 'axios';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();
  const [busqueda, setBusqueda] = useState("");
  const pokeFun = async () => {
    setLoading(true)
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results)
    setLoading(false)
  }
  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url)
      setPokeData(state => {
        state = [...state, result.data]
        state.sort((a, b) => a.id > b.id ? 1 : -1)
        return state;
      })
    })
  }

  const handleChange = e => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }
  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = pokeData.filter((elemento) => {
      if (elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
        return elemento;
      }
    });
    setPokeData(resultadosBusqueda);
  }

  useEffect(() => {
    pokeFun();
  }, [url])

  return (
    <>
      <Navbar />

      <div className="containerInput">
        <input
          className=" btn-search"
          value={busqueda}
          placeholder="Búsqueda por Nombre"
          onChange={handleChange}
        />

        <button className="btn-search">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <div className="container">
        <div className="left-content">




          <Card pokemon={pokeData} loading={loading} infoPokemon={poke => setPokeDex(poke)} />

          <div className="btn-group">
            {prevUrl && <button onClick={() => {
              setPokeData([])
              setUrl(prevUrl)
            }}>Previous</button>}

            {nextUrl && <button onClick={() => {
              setPokeData([])
              setUrl(nextUrl)
            }}>Next</button>}

          </div>
        </div>

        <div className="right-content">
          <PokeInfo data={pokeDex} />
        </div>
      </div >
    </>
  )
}

export default Main;

