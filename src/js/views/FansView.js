import React, { useEffect, useState } from 'react'
import { formatText } from '../formatText'
import text from '../../text/fans.txt'
import { Section } from '../components/Section'


export const FansView = () => {
  const [view, setView] = useState(null)

  useEffect(() => {
    if (view === null) {
      fetch(text)
        .then(res => res.text())
        .then(data => {
          const paragraphs = formatText(data)
          const footer = 'Fan Nicknames: Culés, Barcelonistas, Blaugranes, Azulgranas'

          setView(<Section header={'Fans'} paragraphs={paragraphs} footer={footer}/>)
        })
    }
  })

  return view
}
