import 'core-js/stable'
import 'regenerator-runtime/runtime'
import '../scss/index.scss'

import React from 'react'
import { Switch, Route } from 'react-router-dom'

export const App = ({routes}) => {
  return (
    <main>
      <Switch>
        {
          routes.map((route, index) =>
            <Route exact path={route.path} key={index}>
              {route.view}
            </Route>
          )
        }
      </Switch>
    </main>
  )
}
