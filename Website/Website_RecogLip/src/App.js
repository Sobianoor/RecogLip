import React from 'react';
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact'; 
import Face from './pages/Face';


function App() {
  return (
    <div>
    <Router>
      <Navbar/>
      <Switch>
      
      
        <Route path="/" exact component={Home}/>
        <Route path="/menu" exact component={Menu}/>
        <Route path="/about" exact component={About}/>
        <Route path="/contact" exact component={Contact}/>
      </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
