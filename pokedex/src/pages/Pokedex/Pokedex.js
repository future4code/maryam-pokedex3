import React from 'react'
import {useHistory} from "react-router-dom"

const Pokedex =() => {
    const history = useHistory()

    const goToDetalhes = () =>{
        history.push("/detalhePokemon")
    }

    return (
        <div>
            <h1>Pokedex</h1>
            <button onClick={goToDetalhes}>Ir para Detalhe</button>
        </div>
    )
}
export default Pokedex