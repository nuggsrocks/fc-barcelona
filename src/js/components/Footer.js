import React from 'react'
import PropTypes from 'prop-types'

export const Footer = ({ children }) => {
  return <footer className='section-footer'>{children}</footer>
}

Footer.propTypes = {
  children: PropTypes.any
}
