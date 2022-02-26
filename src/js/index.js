import 'regenerator-runtime/runtime'
import '../scss/index.scss'

import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'

import { BrowserRouter } from 'react-router-dom'

import { getRoutes } from './getRoutes'

getRoutes().then(routes => {
  ReactDOM.render(<BrowserRouter><App routes={routes} /></BrowserRouter>, document.querySelector('#root'))
})
