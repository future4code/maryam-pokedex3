import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, ContainerCard } from "./styled";

const Cards = () => {
    const [cardsPokemon, setCardsPokemon] = useState([]);

    useEffect (() =>{
        axios
        .get("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20")
        .then((res) => {
            console.log(res.data)
            setCardsPokemon(res.data.results)
        })
        .catch((err) =>{
            console.log(err)
        })
    },[])

    const cardPokemon = cardsPokemon.map((card) => {
            return<Container>
            <ContainerCard>
                <h3>{card.name}</h3>
                <img alt="imagem pokemon" src={card.url}/>
                <div>
                    <button>Adicionar</button>
                    <button>Detalhes</button>
                </div>
                </ContainerCard>
                </Container>
    })

   
    return(
        <div>
            {cardPokemon}
        </div>
    )
}

export default Cards
