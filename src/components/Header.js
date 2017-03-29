/**
 * Created by elzeppa on 3/29/17.
 */

import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'
import logo from '../logo.svg';
import '../App.css'

class Header extends Component {
    render() {
        return (
            <header className="navbar navbar-inverse">
                <div className="navbar-header">
                    <a href="#" className="pull-left"><img src={logo} className="App-logo" alt="logo" /></a>
                </div>
                <div className="collapse navbar-collapse col-md-6">
                    <Router>
                        <ul className="nav navbar-nav">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/products'}>Products</Link></li>
                        </ul>
                    </Router>
                </div>
                <div className="pull-right">
                    <form role="search" className="navbar-form">
                        <input type="text" className="form-control" placeholder="Search..."/>
                        <button className="btn btn-default"><i className="glyphicon glyphicon-search" aria-hidden="true"></i></button>
                    </form>
                </div>
            </header>
        )
    }
}

export default Header

