import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import PrivateRoute from './components/PrivateRoute';
import HomePage from "./components/HomePage"

function App() {
  return (
    <Router>
      <div className="App">
        {/* put components in here */}
        <Route exact path ="/" component={Login} />
        <PrivateRoute exact path="/homepage" component={HomePage} />
      </div>
    </Router>
  );
}

export default App;
