import React, { useEffect, useState } from 'react'
import { formatText } from '../formatText'
import { Section } from './Section'


export const SectionView = ({name, text, footer}) => {
  const [view, setView] = useState(null)

  useEffect(() => {
    if (view === null) {
      fetch(text)
      .then(res => res.text())
      .then(data => {
        const paragraphs = formatText(data)

        setView(<Section header={name} paragraphs={paragraphs} footer={footer} />)
      })
    }
  })

  return view
}
