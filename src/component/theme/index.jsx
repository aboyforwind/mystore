import React from 'react'

import { get } from '../../request/index'
import { themeApi } from '../../constant/api'
import imgHost from '../../constant/imgHost'

import './index.scss'

class Theme extends React.Component {
  constructor() {
    super()
    this.state = {
      themeData: [],
    }
  }
  componentDidMount() {
    this.getTheme()
  }
  getTheme() {
    const params = {
      ids: '1,2,3',
    }
    get(themeApi, params).then((res) => {
      this.setState({
        themeData: res,
      })
    })
  }
  render() {
    const { themeData } = this.state
    return (
      <div className="theme">
        <h3 className="theme-title title">精选主题</h3>
        {
          themeData.length ? themeData.map((item, index) => (
            <div key={item.id} className={index === 2 ? 'theme-item row' : 'theme-item'}>
              <img src={`${imgHost}${item.topic_img.url}`} alt={item.description} />
            </div>
          ))
          :
          null
        }
      </div>
    )
  }
}

export default Theme
