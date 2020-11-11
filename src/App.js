import React from 'react';
import PokemonListPage from './pages/PokemonList';
import PokemonDetailsPage from './pages/PokemonDetails';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pokemon/:pokemonName">
          <PokemonDetailsPage />
        </Route>
        <Route path="/">
          <PokemonListPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
