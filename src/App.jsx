import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';
import Header from './Header';
import Contact from './Tabs/Contact';
import Reviews from './Tabs/Reviews';
import Photos from './Tabs/Photos';
import About from './Tabs/About';
import Home from './Tabs/Hotel';
import Location from './Tabs/Location';
function App() {
  return (
    <HttpsRedirect>
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/hotel" component={Home}/>
          <Route path="/location" component={Location}/>
          <Route path="/aboutus" component={About}/>
          <Route path="/photos" component={Photos}/>
          <Route path="/contactus" component={Contact}/>
          <Route path="/reviews" component={Reviews}/>
        </Switch>
      </BrowserRouter>
    </HttpsRedirect>
  );
}

export default App;
