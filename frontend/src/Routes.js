import React, { PureComponent } from "react";
import Company from './Company';
import Companies from './Companies';
import Jobs from './Jobs';
import Login from './Login';
import User from './User';
import Home from './Home';
import PrivateRoute from './PrivateRoute';
import { Switch, Redirect, Route } from "react-router-dom";

class Routes extends PureComponent {
  render() {
    return (

      <Switch>
        <PrivateRoute exact path="/companies"
          render={() => <Companies />} currentToken={this.props.currentToken} />
        <PrivateRoute exact path="/companies/:handle" 
          render={rtProps => <Company {...rtProps} currentToken={this.props.currentToken}  />} currentToken={this.props.currentToken} />
        <PrivateRoute exact path="/jobs"
          render={() => <Jobs currentToken={this.props.currentToken} />} currentToken={this.props.currentToken} />
        <PrivateRoute exact path="/profile"
          render={rtProps => <User {...rtProps} currentToken={this.props.currentToken} />} currentToken={this.props.currentToken} />
        <Route exact path="/login"
          render={rtProps => <Login {...rtProps} setToken={this.props.setToken}
            currentToken={this.props.currentToken} />} />
        <Route exact path="/"
          render={() => <Home />} />
        <Redirect to="/" />
      </Switch>

    );
  }
}

export default Routes;