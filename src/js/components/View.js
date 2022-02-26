import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

export const View = ({ title, text }) => {
  const paragraphs = text.split('\n').filter(x => x !== '')
  return (
    <section>
      <h1>{title}</h1>
      {
        paragraphs.map((paragraph, index) => {
          if (index === paragraphs.length - 1) {
            return <footer key={index}>{paragraph}</footer>
          }
          return <p key={index}>{paragraph}</p>
        })
      }
    </section>
  )
}

View.defaultProps = {
  title: '',
  text: ''
}

View.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
}
