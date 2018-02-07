import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../page/home'
import Category from '../page/category'

const RouteMap = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/category" exact component={Category} />
  </Switch>
)
export default RouteMap
