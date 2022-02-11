import React from 'react';
import { Route } from 'react-router';

function App() {
  return (
    <switch>
      <Route exact path="/">
        This is home page.
      </Route>
      <Route exact path="/starred">
        This is starred
      </Route>
      <Route>
        404 page not found
      </Route>
    </switch>
  );
}

export default App;
