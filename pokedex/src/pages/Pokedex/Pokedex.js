import React from 'react'
import {useHistory} from "react-router-dom"
import Header from "../../components/header/header"

const Pokedex =() => {
    const history = useHistory()

   const goToHome = () =>{
        history.push("/")
    } 

    return (
        <div>
            <Header
        titulo={"Pokedex"}
        mudarPag={() => goToHome(history)}
      />
        </div>
    )
}
export default Pokedex

