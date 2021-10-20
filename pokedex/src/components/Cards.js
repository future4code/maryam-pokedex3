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
    const [pokeList, setPokeList] = useState([]); 

    useEffect (() =>{

        axios
        .get("https://pokeapi.co/api/v2/pokemon/?&limit=20")
        .then((res) => {
            setPokeList(res.data.results)
        })
        .catch((err) =>{
            console.log(err)
        })
    },[])

   

    const cardPokemon = pokeList.map((card) => {
            return <ContainerCard>

<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="Pokemon"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {card.name}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Adicionar</Button>
        <Button size="small">Detalhes</Button>
      </CardActions>
    </Card>
               
                <img alt="imagem pokemon" src={card.url}/>
               
                </ContainerCard>
    })

   
    return(
        <Container>
            {cardPokemon}
        </Container>
    )
}

export default Cards
