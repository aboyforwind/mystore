import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Icon } from 'antd'
import './index.scss'

class Header extends React.Component {
  constructor() {
    super()
    this.back = this.back.bind(this)
  }
  back() {
    this.props.history.goBack();
  }
  render() {
    return (
      <div className="header">
        {
          this.props.hasBack ?
            <div className="back" onClick={this.back}>
              <Icon type="left" />
            </div>
            :
            null
        }
        <span>{this.props.title || '小白商贩'}</span>
      </div>
    )
  }
}
Header.propTypes = {
  title: PropTypes.string,
}
export default withRouter(Header)
