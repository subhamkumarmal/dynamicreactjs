import React from 'react';
import Nav from './Nav';
import {Route,Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () =>{
  return(
    <>
           <Nav/>
           <Switch>
             <Route exact path="/" component={Home}/>
             <Route exact path="/about" component={About}/>
             <Route exact path="/contact" component={Contact}/>
           </Switch>
    </>
  )
}

export default App;