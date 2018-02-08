import React from 'react'
// import PropTypes from 'prop-types'
// import { inject, observer } from 'mobx-react'
import Header from '../component/header/index'
import Slider from '../component/slider/index'
import Footer from '../component/footer/index'
import { sliderApi } from '../constant/api'
import { get } from '../request/index'

import Theme from '../component/theme/index'
import RecentProducts from '../component/recent_products/index'

// @inject('user') @observer
class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      sliders: '',
    }
  }
  componentDidMount() {
    this.getSlier()
  }
  getSlier() {
    get(sliderApi).then((res) => {
      this.setState({
        sliders: res,
      })
    })
  }
  render() {
    // const { count } = this.props.user
    return (
      <div className="home" style={{ paddingBottom: '0.6rem' }}>
        <Header />
        { this.state.sliders ?
          <Slider sliders={this.state.sliders} />
          :
          null
        }
        <Theme />
        <RecentProducts />
        <Footer />
      </div>
    )
  }
}

export default Home

