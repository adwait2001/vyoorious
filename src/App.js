import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen'

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={HomeScreen} ></Route>
      </Switch>
    </div>
  );
}

export default App;
