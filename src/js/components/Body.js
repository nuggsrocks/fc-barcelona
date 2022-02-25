import React from 'react'
import PropTypes from 'prop-types'

export const Body = ({ children }) => {
  return (
    <div className='section-body'>
      {children}
    </div>
  )
}

Body.propTypes = {
  children: PropTypes.any
}
