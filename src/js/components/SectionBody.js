import React from 'react'
import PropTypes from 'prop-types'

export const SectionBody = ({ children }) => {
  return <div className={'section-body'}>
    {children}
  </div>
}

SectionBody.propTypes = {
  children: PropTypes.any
}
