import React from "react";
import Dashboard from './containers/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const App = () => {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard} /> 
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </BrowserRouter>
    )
};

export default App;
