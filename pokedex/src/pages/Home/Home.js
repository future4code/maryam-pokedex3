import React from 'react'
import {useHistory} from "react-router-dom"
import Cards from '../../components/Cards'

const Home =() => {
    const history = useHistory()

    const goToPokedex = () =>{
        history.push("/pokedex")
    }

  
    return (
        <div>
            <h1>Home</h1>
            <button onClick={goToPokedex}>Ir para Pokedex</button>
            <Cards/>
          

        </div>
    )
}
export default Home