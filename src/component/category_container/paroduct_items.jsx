import React from 'react'
import { inject, observer } from 'mobx-react'
import imgHost from '../../constant/imgHost'

import './index.scss'

@inject('products') @observer
class ProductItem extends React.Component {
  constructor() {
    super()
    this.state = {
      products: [],
    }
  }
  componentDidMount() {
    const { id } = this.props.category
    this.getProductByCategory(id)
  }
  getProductByCategory(id) {
    const { products } = this.props
    products.getProductByCategory(id)
  }
  render() {
    const { category, products } = this.props
    const { product } = products
    const pro = product.get(category.id)
    return (
      <div className="product-item">
        <div className="category-main-image">
          <img src={`${imgHost}${category.img.url}`} alt={category.name} />
        </div>
        <div className="category-title">
          {category.name}
        </div>
        <div className="produts-container">
          {
            pro && pro.length ? pro.map(item => (
              <div className="product-box" key={item.id}>
                <img src={`${imgHost}${item.main_img_url}`} alt={item.name} />
                <h3 className="product-name">{item.name}</h3>
              </div>
            )) : null
          }
        </div>
      </div>
    )
  }
}

export default ProductItem
