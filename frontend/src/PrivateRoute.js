import React from 'react';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends React.Component {
    render() {
      const { currentToken, exact, path, render } = this.props;
      if (!currentToken) return <Redirect to='/' />;
        return (
          <Route exact={exact} path={path} render={render} currentToken={currentToken} />
        );
    }
}

export default PrivateRoute;