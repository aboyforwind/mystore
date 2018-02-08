import React from 'react'
import imgHost from '../../constant/imgHost'

import './index.scss'

const ProductTem = props => (
  <React.Fragment>
    {
      props.products && props.products.length ? props.products.map(item => (
        <div key={item.id} className="tem-product-item">
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
  </React.Fragment>
)
export default ProductTem
