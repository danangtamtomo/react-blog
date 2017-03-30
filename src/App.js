import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import Home from './components/Home'
import Products from './components/products/Products'
import AppHeader from './components/Header'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <div>
              <AppHeader/>
              <Route exact path="/" component={Home}/>
              <Route path="/products" component={Products}/>
            </div>
        </Router>
      </div>
    )
  }
}

export default App;
