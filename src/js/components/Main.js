import React from 'react'
import { routes } from '../routes'
import { Route, Switch } from 'react-router-dom'


export const Main = () => {
  return (
    <Switch>
      {
        routes.map(({ path, Component }, index) =>
          <Route exact path={path} key={index}>
            <Component/>
          </Route>
        )
      }
    </Switch>
  )
}
