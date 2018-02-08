import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'

import RouteMap from './routers/router_map'

import './static/common.scss'
import products from './stores/product'

const Root = () => (
  <div className="root">
    <BrowserRouter>
      <Provider products={products}>
        <RouteMap />
      </Provider>
    </BrowserRouter>
  </div>

)
export default Root
