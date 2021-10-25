import React from "react";
import { Container, ContainerButton, ContainerTextH3 } from "./styled";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CardHome = ({ pokemon }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Container>
        <CardMedia
          component="img"
          height="230"
          image={pokemon.sprites.front_default}
          alt="Pokemon"
        />

        <CardContent>
          <ContainerTextH3>
          <Typography gutterBottom variant="h4" component="div">
            {pokemon.name[0].toUpperCase() + pokemon.name.substr(1)}
          </Typography>
          </ContainerTextH3>
        </CardContent>

        <ContainerButton>
        <CardActions>
          <Button size="small">Adicionar</Button>
          <Button size="small">Detalhes</Button>
        </CardActions>
        </ContainerButton>
      </Container>
    </Card>
  );
};

export default CardHome;
