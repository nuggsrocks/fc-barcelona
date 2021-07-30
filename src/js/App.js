import React, { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { routes } from './routes'
import { Menu } from './components/Menu'

export const App = () => {
  return <Fragment>
    <Menu/>
    <div className={'divider'}/>
    <Switch>
      {
        routes.map(({path, Component}, index) =>
          <Route exact path={path} key={index}>
            <Component/>
          </Route>
        )
      }
    </Switch>
  </Fragment>
}
