import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomeMain from './Components/Home/HomeMain/HomeMain';
const App = () => {
  return (
    <Router>
        <Switch>
          <Route path='/' exact component={HomeMain}/>
        </Switch>
    </Router>
  );
};

export default App;