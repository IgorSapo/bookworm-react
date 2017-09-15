import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h3>Home Page</h3>
    <Link to="/login">Login</Link>
  </div>
);

export default HomePage;
