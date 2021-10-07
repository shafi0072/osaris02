import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// C:\Program Files\MongoDB\Server\5.0\
import HomeMain from './Components/Home/HomeMain/HomeMain';
import Guitar from './Components/Shop/Guitar/Guitar';
import Bass from './Components/Shop/Bass/Bass';
import InStocks from './Components/Shop/InStocks/InStocks';
import Merch from './Components/Merch/Merch';
import Artist from './Components/Artist/Artist';
const App = () => {
  return (
    <Router>
        <Switch>
          <Route path = '/' exact component={HomeMain}/>
          <Route path = '/guitar' exact component={Guitar}/>
          <Route path = '/bass' exact component={Bass}/>
          <Route path = '/in-stock' exact component = {InStocks}/>
          <Route path = '/merch' exact component = {Merch}/>
          <Route path = '/artist' exact component = {Artist}/>
        </Switch>
    </Router>
  );
};

export default App;