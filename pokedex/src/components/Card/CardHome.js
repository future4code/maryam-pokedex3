import React from "react";
import axios from "axios";
import { Container} from "./styled";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useControlled from "@mui/utils/useControlled";
import { Link } from "react-router-dom";
import { ListItem } from "@mui/material";


const CardHome = ({pokemon}) => {
     
   
    return(
       <Container>
            
            <Card sx={{ maxWidth: 345 }}>
            
      
      
      <ListItem component={Link} to={`/pokedex/${pokemon.id}`}>
      {/* <Link to = {`/pokedex/${pokemon.id}`}> */}
      <CardMedia
        component="img"
        height="140"
        image 
        alt="Pokemon"
      />
       {/* </Link>     */}
      
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          {pokemon.name}
          
        </Typography>
       
      </CardContent>
      </ListItem>
     
      <CardActions>
        <Button size="small">Adicionar</Button>
        <Button size="small">Detalhes</Button>
      </CardActions>
     
    </Card>
    
     <Link to = {`/pokedex/${pokemon.id}`}>
      <img src={pokemon.sprites.front_default}/>
      {pokemon.name}
      </Link>
   
        </Container>

    )
}

export default CardHome
