import React from 'react'
import {useHistory} from "react-router-dom"

const DetalheDoPokemon =() => {
    const history = useHistory()

    const goToPokedex = () =>{
        history.push("/pokedex")
    }
    return (
        <div>
            <h1>Detalhes</h1>
            <button onClick={goToPokedex}>Ir para Pokedex</button>
        </div>
    )
}
export default DetalheDoPokemon