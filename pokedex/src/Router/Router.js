import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home"
import Pokedex from "../pages/Pokedex/Pokedex"
import DetalheDoPokemon from "../pages/DetalheDoPokemon/DetalheDoPokemon";
import React from "react";


const Router = () => {
  return (
   
      <BrowserRouter>
        <Switch>

          <Route exact path={"/"}>
            <Home/>
          </Route>

          <Route exact path={"/pokedex"}>
            <Pokedex/>
          </Route>

          <Route exact path={"/detalhepokemon"}>
            <DetalheDoPokemon/>
          </Route>

          <Route>
            <div>Página não encontrada!</div>
          </Route>

        </Switch>
      </BrowserRouter>
  
  );
};

export default Router;
