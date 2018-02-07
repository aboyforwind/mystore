import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'

import './index.scss'

const TextIcon = (props) => {
  const { type, text } = props
  return (
    <div className="icon">
      <Icon type={type} />
      <span>{text}</span>
    </div>
  )
}
TextIcon.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
}
export default TextIcon
