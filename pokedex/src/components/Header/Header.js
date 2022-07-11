import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import { Navegate, ImgPokeBola } from "./styled"
import Button from '@mui/material/Button';
import PokeBola from "../../img/pokeBola.png"
import Home from "../../pages/home/home";
import Pokedex from "../../pages/Pokedex/Pokedex"


function Header({ titulo, mudarPag }) {
  const history = useHistory();

  const trocarPagina = () => {
    if (<Home />) {
      return "Pokedex"
    } else if (<Pokedex />) {
      return "Pokedex"
    } else {
      <div>Erro na página</div>
    }
  }

  return (
    <Navegate>
      <ImgPokeBola src={PokeBola} alt="pokebola" />
      <h1>{titulo}</h1>
      <Button onClick={mudarPag}> {trocarPagina()}</Button>
    </Navegate>
  )
}
export default Header
