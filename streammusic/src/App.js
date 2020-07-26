import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import SignUp from './containers/Auth/SignUp';
import SignIn from './containers/Auth/SignIn';
import Layout from './Layout/Layout';


function App() {

  let routes = 
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/layout" component={Layout} />
      <Redirect to="/" />
    </Switch>

    return (    
      <div>{routes}</div>  
    );
  
}

export default App;
