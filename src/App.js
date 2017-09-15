import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import { Container } from 'semantic-ui-react';

const App = () => (
  <Container>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/login" component={LoginPage} />
  </Container>
);

export default App;
