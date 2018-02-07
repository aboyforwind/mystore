import React from 'react'
import { Tabs } from 'antd';

import { get } from '../../request/index'

import { allCategories, productByCategory } from '../../constant/api'
// import imgHost from '../../constant/imgHost'

import './index.scss'

const { TabPane } = Tabs;
class ProductItem extends React.Component {
  constructor() {
    super()
    this.state = {
      products: [],
    }
  }
  componentDidMount() {

  }
  getProductByCategory(id) {
    const params = {
      id,
    }
    get(productByCategory, params).then((res) => {
      const { products } = this.state
      products = res;
      this.setState({
        products,
      })
    })
  }
  render() {
    return (
      <div className="category-container">
        <Tabs defaultActiveKey="1" >
          <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
          <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
          <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>
      </div>
    )
  }
}

export default ProductItem
