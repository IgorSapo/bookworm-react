import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import DashboardPage from './components/pages/DashboardPage';
import SignupPage from './components/pages/SignupPage';
import UserRoute from './components/routes/UserRoute.jsx';
import GuestRoute from './components/routes/GuestRoute.jsx';

const App = ({ location }) => (
  <Container>
    <Route location={location} exact path="/" component={HomePage} />
    <GuestRoute location={location} exact path="/login" component={LoginPage} />
    <GuestRoute
      location={location}
      exact
      path="/signup"
      component={SignupPage}
    />
    <UserRoute
      location={location}
      exact
      path="/dashboard"
      component={DashboardPage}
    />
  </Container>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
