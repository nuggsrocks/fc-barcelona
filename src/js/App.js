import React, { Fragment } from 'react'
import { Menu } from './components/Menu'
import { Main } from './components/Main'

export const App = () => {
  return <Fragment>
    <Menu/>
    <div className={'divider'}/>
    <Main/>
  </Fragment>
}
