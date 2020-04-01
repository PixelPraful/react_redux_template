import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './components/Home';
import asyncComponent from './hoc/asynComponent/asyncComponent';

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
