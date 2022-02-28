import React from 'react';
import { Route } from 'react-router';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Show from './pages/Show';
import Starred from './pages/Starred';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/starred">
        <Starred />
      </Route>
      <Route exact path="/show/:id">
        <Show />
      </Route>

      <Route path="any">404 page not found</Route>
    </ThemeProvider>
  );
}

export default App;
