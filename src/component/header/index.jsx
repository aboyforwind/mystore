import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const Header = props => (
  <div className="header">
    <span>{props.title || '小白商贩'}</span>
  </div>
)
Header.propTypes = {
  title: PropTypes.string,
}
export default Header
