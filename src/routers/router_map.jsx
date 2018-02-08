import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../page/home'
import Category from '../page/category'
import Theme from '../page/theme'

const RouteMap = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/category" exact component={Category} />
    <Route path="/theme/:id" exact component={Theme} />
  </Switch>
)
export default RouteMap
