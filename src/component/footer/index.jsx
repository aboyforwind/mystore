import React from 'react'
import { Link } from 'react-router-dom'

import TextIcon from '../icon/index'

import './index.scss'

class Footer extends React.Component {
  constructor() {
    super()
    this.state = {
      activeIndex: 0,
    }
    this.changeTab = this.changeTab.bind(this)
  }
  changeTab(index) {
    this.setState({
      activeIndex: index,
    })
  }
  render() {
    const footerNav = [
      { iconType: 'home', text: '主页', path: '/' },
      { iconType: 'appstore-o', text: '分类', path: '/category' },
      { iconType: 'shopping-cart', text: '购物车', path: '/' },
      { iconType: 'user', text: '我的', path: '/' },
    ]
    return (
      <div className="footer">
        {
          footerNav.map((item, index) => (
            <div
              className={index === this.state.activeIndex ? 'footer-icon active' : 'footer-icon'}
              onClick={() => this.changeTab(index)}
              key={item.text}
            >
              <Link to={item.path}>
                <TextIcon type={item.iconType} text={item.text} />
              </Link>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Footer
