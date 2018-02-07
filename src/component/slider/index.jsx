import React from 'react'
import { Carousel } from 'antd';

import imgHost from '../../constant/imgHost'
import './index.scss'

class Slider extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    const { sliders } = this.props
    return (
      <Carousel>
        {
          sliders.items.map(item => (
            <div key={item.img.url}>
              <img src={`${imgHost}${item.img.url}`} alt="sdfdsf" />
            </div>
          ))
        }
      </Carousel>
    )
  }
}
export default Slider
