import React from 'react'

import { get } from '../../request/index'
import { recentProducts } from '../../constant/api'

import ProductTem from '../../component/product_tem/index'
import './index.scss'

class RecentProducts extends React.Component {
  constructor() {
    super()
    this.state = {
      products: [],
    }
  }
  componentDidMount() {
    this.getProducts()
  }
  getProducts() {
    get(recentProducts).then((res) => {
      this.setState({
        products: res,
      })
    })
  }
  render() {
    const { products } = this.state
    return (
      <div className="recent-products">
        <h2 className="recent-products-title title">最近新品</h2>
        <div className="products-container">
          <ProductTem products={products} />
        </div>

      </div>
    )
  }
}

export default RecentProducts
