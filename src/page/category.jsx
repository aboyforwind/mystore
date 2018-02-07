import React from 'react'
// import PropTypes from 'prop-types'
import Header from '../component/header/index'
import Footer from '../component/footer/index'
import CategoryContainer from '../component/category_container/index'

class Category extends React.Component {
  constructor() {
    super()
    this.state = {
      sliders: '',
    }
  }
  componentDidMount() {
  }
  render() {
    // const { count } = this.props.user
    return (
      <div className="category" style={{ paddingBottom: '0.6rem' }}>
        <Header />
        <CategoryContainer />
        <Footer />
      </div>
    )
  }
}

export default Category

