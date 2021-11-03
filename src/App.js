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
import Builder from './Components/ClientBuilder/ClientBuilder';
import InStocks from './Components/Shop/InStocks/InStocks';
import Merch from './Components/Merch/Merch';
import Artist from './Components/Artist/Artist';
import Blog from './Components/Blog/Blog';
import GuitarDetails from './Components/Shop/Guitar/GuitarDetails';
import AdminMain from './Components/AdminPane/AdminMain';
import Gears from './Components/UsedGears/Gears';
import Care from './Components/G-Care/Care';
import Learn from './Components/Learn/Learn';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
const App = () => {
  return (
    <Router>
        <Switch>
          <Route path = '/' exact component={HomeMain}/>
          <Route path = '/guitar' exact component={Guitar}/>
          <Route path = '/bass' exact component={Bass}/>
          <Route path = '/builder' exact component={Builder}/>
          <Route path = '/in-stock' exact component = {InStocks}/>
          <Route path = '/gears' exact component = {Gears}/>
          <Route path = '/care' exact component = {Care}/>
          <Route path = '/artist' exact component = {Artist}/>
          <Route path = '/learn' exact component = {Learn}/>
          <Route path = '/blog' exact component = {Blog}/>
          <Route path = '/guitar-details' exact component = {GuitarDetails}/>
          <Route path = '/adminPanel' component={AdminMain}/>
          <Route path = '/login' component={Login}/>
          <Route path = '/signup' component={Signup}/>
        </Switch>
    </Router>
  );
};

export default App;