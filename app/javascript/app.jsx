import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Greeting from './component/Greeting';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Greeting} />
      </div>
    </Router>
  );
};

export default App;