import React from 'react'

import { get } from '../../request/index'
import { recentProducts } from '../../constant/api'
import imgHost from '../../constant/imgHost'

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
          {
            products.length ? products.map(item => (
              <div key={item.id} className="recent-product-item">
                <div className="container">
                  <img src={`${imgHost}${item.main_img_url}`} alt={item.description} />
                  <div className="product-info">
                    <h3>
                      {item.name}
                    </h3>
                    <span>
                      ￥{item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))
            :
            null
          }
        </div>

      </div>
    )
  }
}

export default RecentProducts
