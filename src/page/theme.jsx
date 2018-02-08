import React from 'react'
// import PropTypes from 'prop-types'
import Header from '../component/header/index'
import Footer from '../component/footer/index'
import ProductTem from '../component/product_tem/index'
import imgHost from '../constant/imgHost'

import { get } from '../request/index'
import { themeProducts } from '../constant/api'

class Theme extends React.Component {
  constructor() {
    super()
    this.state = {
      themeInfo: '',
    }
  }
  componentDidMount() {
    const { id } = this.props.match.params
    this.getProductByThemeId(id)
  }
  getProductByThemeId(id) {
    const url = themeProducts(id)
    get(url).then((res) => {
      this.setState({
        themeInfo: res,
      })
    })
  }
  render() {
    const { themeInfo } = this.state
    return (
      <React.Fragment>
        { themeInfo ?
          <div className="theme">
            <Header hasBack title={themeInfo.description} />
            <div
              className="theme-img"
              style={{
                height: '2rem',
                overflow: 'hidden',
              }}
            >
              <img src={`${imgHost}${themeInfo.head_img.url}`} alt={themeInfo.description} />
            </div>
            <ProductTem products={themeInfo.products} />
            <Footer />
          </div>
          :
          null
        }
      </React.Fragment>
    )
  }
}

export default Theme

