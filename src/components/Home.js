/**
 * Created by elzeppa on 3/29/17.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'

const Home = (props) => {
    return (
        <div className="container">
          Home {JSON.stringify(props.keyword)}
        </div>
    )
}

const mapStateToProp = (state) => {
  return {
    keyword: state
  }
}

export default connect(mapStateToProp, null)(Home)
