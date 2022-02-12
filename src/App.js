import React from 'react';
import { Route } from 'react-router';
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/starred">
        <Starred />
      </Route>
      <Route path="any">404 page not found</Route>
    </>
  );
}

export default App;
