import React from 'react'
import PropTypes from 'prop-types'
import { SectionHeader } from './SectionHeader'
import { SectionBody } from './SectionBody'
import { SectionFooter } from './SectionFooter'

export const Section = ({children}) => {
  return (
    <section>
      {children}
    </section>
  )
}

Section.Header = SectionHeader
Section.Body = SectionBody
Section.Footer = SectionFooter

Section.propTypes = {
  header: PropTypes.string,
  paragraphs: PropTypes.arrayOf(PropTypes.string),
  footer: PropTypes.string
}
