import React from 'react'
import PropTypes from 'prop-types'

export const SectionView = ({ header = '', paragraphs = [''], footer = '' }) => {
  return (
    <section>
      <h2>{header}</h2>
      {paragraphs.map((p, index) => <p key={index}>{p}</p>)}
      <footer>{footer}</footer>
    </section>
  )
}

SectionView.propTypes = {
  header: PropTypes.string,
  paragraphs: PropTypes.arrayOf(PropTypes.string),
  footer: PropTypes.string
}
