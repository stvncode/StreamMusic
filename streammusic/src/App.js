import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import LayoutSignUp from './Layout/LayoutSignUp';
import LayoutSignIn from './Layout/LayoutSignIn';


function App() {

  let routes = 
  <Switch>
        <Route exact path="/" component={LayoutSignIn} />
        <Route exact path="/signup" component={LayoutSignUp} />
        <Redirect to="/" />
  </Switch>

  return (
    <div>{routes}</div>
  );
}

export default App;
