import { formatText } from '../src/js/formatText'

describe('formatText()', () => {
  it('should return array of paragraphs', () => {
    expect(formatText()).toBeInstanceOf(Array)
  })

  it.each([
    { string: 'foo/nbar', expected: ['foo', 'bar'] },
    { string: '   hello/nworld/nfoo/nbar   ', expected: ['hello', 'world', 'foo', 'bar'] },
    { string: 'hello world/n foobar', expected: ['hello world', 'foobar'] },
    { string: ' FOO BAR  . /n helloworld.', expected: ['FOO BAR  .', 'helloworld.'] }
  ])('should split "$string" into $expected', ({ string, expected }) => {
    expect(formatText(string)).toEqual(expected)
  })
})
