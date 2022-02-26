import React from 'react'
import { View } from './View'
import { Route, Routes } from 'react-router-dom'
import { Nav } from './Nav'
import PropTypes from 'prop-types'

export const App = ({ routes }) => {
  return (
    <>
      <Nav routes={routes} />
      <Routes>
        {
          routes.map(({ name, path, text }, index) => {
            return <Route key={index} path={path} element={<View title={name} text={text} />} />
          })
        }
      </Routes>
    </>
  )
}

App.propTypes = {
  routes: PropTypes.array
}
