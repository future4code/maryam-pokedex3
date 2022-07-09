import React, {useState} from "react"
import { useHistory } from "react-router-dom";
import {ContainerHeader, Button} from "./styled"

const Header = ({titulo, mudarPag}) => {
    const history = useHistory();

    const renderizarHeader = () => {
      switch (titulo) {
        case "Lista de Pokemons":
          return "Pokedex"
        case "Pokedex":
          return "Lista"
        default:
          return <div>Página não encontrada!</div>
      }
    }

    return (
        <ContainerHeader>
            <h2>{titulo}</h2>
          <Button onClick={mudarPag}>
            {renderizarHeader()}
          </Button>
        </ContainerHeader>
      )
}
export default Header
