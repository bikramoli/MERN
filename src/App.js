import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import User from './user/pages/user';
import AddPlaces from './places/pages/addPlaces'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact="true">
          <User />
        </Route>
        <Route path="/places/addPlace"><AddPlaces /></Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
