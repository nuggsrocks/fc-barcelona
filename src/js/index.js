import React, { useEffect, useState } from 'react'
import { App } from './app'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link } from 'react-router-dom'
import { getRoutes } from './getRoutes'

const Index = () => {
  const [routes, setRoutes] = useState([])

  useEffect(() => {
    if (routes === []) {
      getRoutes().then(routes => setRoutes(routes))
    }
  })

  return (
    <BrowserRouter>
      <nav>
        {
          routes.map((route, index) =>
            <Link to={route.path} key={index}>{route.name}</Link>
          )
        }
      </nav>
      <App routes={routes}/>
    </BrowserRouter>
  )
}

ReactDOM.render(<Index/>, document.querySelector('#root'))
