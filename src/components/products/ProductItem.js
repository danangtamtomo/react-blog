import React from 'react'
import {connect} from 'react-redux'

const ProductItem = (props) => {
  return (
    <div className="col-md-3">
        <div className="card" style={{width: 20+'rem'}}>
        <div className="card-block">
          <h4 className="card-title">{props.product.title}</h4>
          <p className="card-text">{props.product.author} created at {props.product.created_at}</p>
          <a href={props.product.url} className="btn btn-primary">More Detail</a>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
