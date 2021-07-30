import React from 'react'
import PropTypes from 'prop-types'

export const SectionFooter = ({ children }) => {
  return <footer className={'section-footer'}>{children}</footer>
}

SectionFooter.propTypes = {
  children: PropTypes.any
}
