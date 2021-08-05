import React from 'react'
import PropTypes from 'prop-types'

export const Header = ({ children }) => {
  return <h2 className={'section-header'}>{children}</h2>
}

Header.propTypes = {
  children: PropTypes.any
}
