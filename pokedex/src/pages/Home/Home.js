import React from 'react'
import {useHistory} from "react-router-dom"
import Cards from '../../components/Cards'
import Header from "../../components/Header/Header"

const Home =() => {
    const history = useHistory()

    const goToPokedex = () =>{
        history.push("/pokedex")
    }

  
    return (
        <div>
           <Header
        titulo={"Lista de Pokemons"}
        mudarPag={() => goToPokedex(history)}
      />
           
            <Cards/>
        </div>
    )
}
export default Home