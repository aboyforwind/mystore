import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'

import RouteMap from './routers/router_map'

import './static/common.scss'
import user from './stores/user'

const Root = () => (
  <div className="root">
    <BrowserRouter>
      <Provider user={user}>
        <RouteMap />
      </Provider>
    </BrowserRouter>
  </div>

)
export default Root
