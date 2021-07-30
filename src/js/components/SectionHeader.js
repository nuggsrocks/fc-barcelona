import React from 'react'
import PropTypes from 'prop-types'

export const SectionHeader = ({ children }) => {
  return <h2 className={'section-header'}>{children}</h2>
}

SectionHeader.propTypes = {
  children: PropTypes.any
}
