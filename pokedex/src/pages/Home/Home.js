import {useHistory} from "react-router-dom"
import Cards from '../../components/Cards'
import Header from "../../components/Header/Header"
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home =() => {
    const history = useHistory()
    const [pokemon, setPokemon]=useState([])
    const [loading, setLoading]=useState(true)

    const goToPokedex = () =>{
        history.push("/pokedex")
    }
        
    const getPokemon = async() =>{
      let pokemonArray = []
      for(let i = 1; i <= 30; i++){
        pokemonArray.push(await getPokemonData(i))
      }
      setPokemon(pokemonArray)
      setLoading(false)
    }
  
    const getPokemonData = async (id) =>{
      const res = await 
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      return res
    }
   
    useEffect(() => {
      getPokemon()
    }, [])
  
    
  
    return (
        <div>

           <Header
        titulo={"Lista de Pokemons"}
        mudarPag={() => goToPokedex(history)}
      />
           <div>
          {loading ? (
            <h1>Loading...</h1> 
            ) : (
              <div>
                {pokemon.map(poke =>(
                  <div key={poke.data.name}>
                      <Cards pokemon={poke.data}/>
                  </div>
                ))}
              </div>
          )}
        </div>

        </div>
    )
}
export default Home