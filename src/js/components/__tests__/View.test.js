/* global React, render */
import { View } from '../View'

describe('<View/>', () => {
  it('should render given text to dom within section element with seperate paragraph elements for each new line, and the last paragraph in a footer element', () => {
    const mockText = 'foo bar\nlorem ipsum\n\nbarfoo'

    render(<View text={mockText} />)

    expect(document.body).toMatchSnapshot()
  })
  it('should render given title to dom within h2 element', () => {
    const mockTitle = 'this is a title'

    render(<View title={mockTitle} />)

    expect(document.body).toMatchSnapshot()
  })
})
