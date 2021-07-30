import { loadTextFiles } from '../src/js/loadTextFiles'

import txt1 from '../src/text/history.txt'
import txt2 from '../src/text/fans.txt'

describe('loadTextFiles()', () => {
  it('should load all files in given array asynchronously', async () => {
    const mockFetch = jest.fn(() => {
      return new Promise(resolve => {
        resolve({
          text: () => {
            return new Promise(resolve => resolve('text'))
          }
        })
      })
    })

    const files = { history: txt1, fans: txt2 }

    const loaded = await loadTextFiles(mockFetch, files)

    const expected = { history: 'text', fans: 'text' }

    expect(loaded).toEqual(expected)
    expect(mockFetch).toHaveBeenCalledWith(txt1)
    expect(mockFetch).toHaveBeenCalledWith(txt2)
  })
})
