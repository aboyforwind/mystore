import React from 'react'
import { Tabs } from 'antd';

import { get } from '../../request/index'

import { allCategories } from '../../constant/api'
// import imgHost from '../../constant/imgHost'

import ProductItem from './paroduct_items'
import './index.scss'

const { TabPane } = Tabs;
class CategoryContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      categories: [],
    }
  }
  componentDidMount() {
    this.getAllCategory()
  }
  getAllCategory() {
    get(allCategories).then((res) => {
      this.setState({
        categories: res,
      })
    })
  }
  render() {
    const { categories } = this.state
    return (
      <div className="category-container">
        <Tabs defaultActiveKey="1" tabPosition="left">
          {
            categories.length ? categories.map(item => (
              <TabPane tab={item.name} key={item.id}>
                <ProductItem category={item} />
              </TabPane>
            )) : null
          }
        </Tabs>
      </div>
    )
  }
}

export default CategoryContainer
