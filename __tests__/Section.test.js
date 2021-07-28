import React from 'react'
import { render } from '@testing-library/react'
import { Section } from '../src/js/components/Section'

describe('<Section/>', () => {
  it.each([
    { header: 'hello', paragraphs: ['foo', 'bar'], footer: 'world' },
    { header: 'Hello', paragraphs: ['one', 'two', 'three'], footer: 'foobar' },
    { header: 'Hello world', paragraphs: ['one'], footer: 'World hello' }
  ])('should display given header, paragraphs, and footer',
    ({ header, paragraphs, footer }) => {
      const { getByText } = render(<Section header={header} paragraphs={paragraphs} footer={footer}/>)

      expect(getByText(header))
      paragraphs.forEach(paragraph => {
        expect(getByText(paragraph))
      })
      expect(getByText(footer))
    })
})
