
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import axios from "axios";
import CardHome from "../../components/Card/CardHome";
import { ContainerCard } from "./styled";

const Home = () => {
  const history = useHistory();
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true)


  const getImg = async () => {
    let pokemonArray = [];
    for (let i = 1; i <= 20; i++) {
      pokemonArray.push(await getPokemonData(i));
    }


    setPokemon(pokemonArray);
    setLoading(false)
  };

  
  const getPokemonData = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res;
  };

  const goToPokedex = () => {
    history.push("/pokedex");
  };
  useEffect(() => {
    getImg();
  }, []);

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
              <ContainerCard>
                {pokemon.map(poke =>(
                  <div key={poke.data.name}>
                      <CardHome pokemon={poke.data}/>
                  </div>
                ))}
              </ContainerCard>
          )}
        </div>


       

    </div>
  );
};
export default Home;
