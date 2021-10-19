import React from 'react'
import {useHistory} from "react-router-dom"


const Pokedex =() => {
    const history = useHistory()

    const goToHome = () =>{
        history.push("/")
    }

    return (
        <div>
            <h1>Pokedex</h1>
            <button onClick={goToHome}>Ir para Detalhe</button>
        </div>
    )
}
export default Pokedex