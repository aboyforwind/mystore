import React from 'react';
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './root'

const rootElement = document.getElementById('app')
const render = Component => (
  ReactDom.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootElement,
  )
)
render(Root)

if (module.hot) {
  module.hot.accept('./root.jsx', () => {
    const NextApp = require('./root.jsx').default
    render(NextApp)
  })
}
