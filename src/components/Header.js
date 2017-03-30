/**
 * Created by elzeppa on 3/29/17.
 */

import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import logo from '../logo.svg';
import '../App.css'

import { addKeywordAction } from '../actions'

class Header extends Component {
    render() {
        return (
            <header className="navbar navbar-inverse">
                <div className="navbar-header">
                    <a href="#" className="pull-left"><img src={logo} className="App-logo" alt="logo" /></a>
                </div>
                <div className="collapse navbar-collapse col-md-6">
                    <ul className="nav navbar-nav">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/products'}>Products</Link></li>
                    </ul>
                </div>
                <div className="pull-right">
                    <form role="search" className="navbar-form">
                        <input type="text" className="form-control" placeholder="Search..."
                          onChange={(event) => this.props.setKeyword(event.target.value)}
                          />
                        <button className="btn btn-default"><i className="glyphicon glyphicon-search" aria-hidden="true"></i></button>
                    </form>
                </div>
            </header>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setKeyword: (keyword) => {
      dispatch(addKeywordAction(keyword))
    }
  }
}


export default connect(null, mapDispatchToProps)(Header)
