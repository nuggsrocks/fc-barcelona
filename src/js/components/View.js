import React from 'react'
import PropTypes from 'prop-types'

export const View = ({ title, text }) => {
  return (
    <section>
      <h1>{title}</h1>
      {
        text.split('\n').filter(x => x !== '').map((paragraph, index) => {
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
