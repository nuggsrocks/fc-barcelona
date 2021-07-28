import 'core-js/stable'
import 'regenerator-runtime/runtime'
import '../scss/index.scss'

import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { FansView } from './views/FansView'

export const App = () => {

  return (
    <main>
      <Switch>
        <Route path={'/fans'}>
          <FansView/>
        </Route>
      </Switch>
    </main>
  )
}
