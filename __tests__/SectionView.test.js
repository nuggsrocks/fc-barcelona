import React from 'react'
import { render } from '@testing-library/react'
import { SectionView } from '../src/js/views/SectionView'

describe('<SectionView/>', () => {
  it.each([
    { header: 'hello', paragraphs: ['foo', 'bar'], footer: 'world' },
    { header: 'Hello', paragraphs: ['one', 'two', 'three'], footer: 'foobar' },
    { header: 'Hello world', paragraphs: ['one'], footer: 'World hello' }
  ])('should display given header, paragraphs, and footer',
    ({ header, paragraphs, footer }) => {
      const { getByText } = render(<SectionView header={header} paragraphs={paragraphs} footer={footer}/>)

      expect(getByText(header))
      paragraphs.forEach(paragraph => {
        expect(getByText(paragraph))
      })
      expect(getByText(footer))
    })
})
