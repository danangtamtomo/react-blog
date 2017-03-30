/**
 * Created by elzeppa on 3/29/17.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'

import ProductItem from './ProductItem'

import {addKeyword, filterProducts} from '../../actions'




class Products extends Component{
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentWillReceiveProps(nextProps) {
    // this.filterProducts(nextProps.keyword.searchProductsByKeyword)
    filterProducts(nextProps.keyword.searchProductsByKeyword)
  }

  filterProducts(keyword) {
    let url = `http://hn.algolia.com/api/v1/search?query=${keyword}`
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({
          products: data.hits
        })
      })
  }

  componentDidMount() {
    fetch('http://hn.algolia.com/api/v1/search?')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({
          products: data.hits
        })
      })
  }

  render() {
    return(
        <div className="container">
          {this.state.products.map((product) => {
            return(
              <ProductItem key={product.objectID} product={product}/>
            )
          })}
        </div>
    )
  }
}

const mapStateToProp = (state) => {
  return {
    keyword: state
  }
}

export default connect(mapStateToProp, null)(Products)
