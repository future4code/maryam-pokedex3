import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, ContainerCard } from "./styled";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Cards = () => {
    const url = id => `https://pokeapi.co/api/v2/pokemon/${id}`
    const pokemon = []
    
    for(let i = 1; i <= 30; i++){
      pokemon.push(fetch(url(i)).then(response => response.json()))
    }

    Promise.all(pokemon)
    .then(pokemons => {
      const listaDePokemons = pokemons.reduce((accumulator, pokemon) =>{
        const types = pokemon.types.map(typeInfo => typeInfo.type.name)
        accumulator += 
        `<div "${types[0]}">
          <h2> ${pokemon.id} .
            ${pokemon.name} </h2>
        
        <img  alt="${pokemon.name}"  src="${pokemon.sprites.front_default}"/>
        </div>`

      return accumulator
    }, '')

    const div = document.querySelector('[data-js="pokedex"]')
    div.innerHTML = listaDePokemons
   })

  
    return(
        <Container>
        <div data-js="pokedex" class='pokedex'></div>
        </Container>
    )

}
export default Cards


 // const cardPokemon = pokemon.map((card) => {
    //         return <ContainerCard>

    //   <Card sx={{ maxWidth: 345 }}>
    //   <CardMedia
    //     component="img"
    //     height="140"
    //     image="/static/images/cards/contemplative-reptile.jpg"
    //     alt="Pokemon"
    //   />
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       {card.name}
    //     </Typography>
        
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Adicionar</Button>
    //     <Button size="small">Detalhes</Button>
    //   </CardActions>
    // </Card>
               
    //             <img alt="imagem pokemon" src={card.url}/>
               
    //             </ContainerCard>
    // })


   