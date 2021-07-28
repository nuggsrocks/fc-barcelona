import React from 'react'
import PropTypes from 'prop-types'

export const Section = ({ header = '', paragraphs = [''], footer = '' }) => {
  return (
    <section>
      <h2>{header}</h2>
      {paragraphs.map((p, index) => <p key={index}>{p}</p>)}
      <footer>{footer}</footer>
    </section>
  )
}

Section.propTypes = {
  header: PropTypes.string,
  paragraphs: PropTypes.arrayOf(PropTypes.string),
  footer: PropTypes.string
}
