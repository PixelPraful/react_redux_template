import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


import Home from './components/Home';

class App extends React.Component {

  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div>
        {routes}
      </div>
    );
  }
}

export default App;
