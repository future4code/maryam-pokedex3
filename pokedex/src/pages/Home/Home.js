import React, { useEffect, useState } from "react";
import axios from "axios";
import CardHome from "../../components/Card/CardHome";
import { ContainerCard } from "./styled";
import Header from "../../components/header/header";
import {useHistory} from "react-router-dom"

function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true)
  const history = useHistory()

  const goToPokedex = () =>{
       history.push("/pokedex")
   }

  const getImg = async () => {
    let pokemonArray = [];
    for (let i = 1; i <= 20; i++) {
      pokemonArray.push(await getPokemonData(i));
    }
    setPokemon(pokemonArray);
    setLoading(false)
  };

  useEffect(() => {
    getImg();
  }, []);

  const getPokemonData = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res;
  };

  return (
    <div>

      <Header
        titulo={"Pokedex"}
        mudarPag={() => goToPokedex(history)}
      />

      {/* {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ContainerCard>
          {pokemon.map((poke) => (
            <div key={poke.data.name}>
              <CardHome pokemon={poke.data} />
            </div>
          ))}
        </ContainerCard>
      )} */}
    </div>
  );
};

export default Home;
