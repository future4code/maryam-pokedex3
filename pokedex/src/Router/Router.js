import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "../pages/Home/Home"
import Pokedex from "../pages/Pokedex/Pokedex"
import DetalheDoPokemon from "../pages/DetalheDoPokemon/DetalheDoPokemon"
import React from "react"


const Router = () => {
    return (
      <div >
        <BrowserRouter>
        <Switch>
          <Route exact patch="/">
            <Home/>
          </Route>
          <Route exact patch="/pokedex">
            <Pokedex/>
          </Route>
          <Router exact patch="/detalhePokemon">
              <DetalheDoPokemon/>
          </Router>
          <Router>
              <div>Página não encontrada!</div>
          </Router>
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
  
  export default Router