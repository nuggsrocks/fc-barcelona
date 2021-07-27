import { loadTextFiles } from '../src/js/loadTextFiles'

import txt1 from '../src/text/history.txt'
import txt2 from '../src/text/fans.txt'

describe('loadTextFiles()', () => {
  it('should load all files in given array asynchronously', async () => {
    const mockFetch = () => {
      return new Promise(resolve => {
        resolve({
          text: () => {
            return new Promise(resolve => resolve('text'))
          }
        })
      })
    }

    const files = [{ name: 'history', url: txt1 }, { name: 'fans', url: txt2 }]

    const loaded = await loadTextFiles(mockFetch, files)

    for (const index in loaded) {
      expect(loaded[index]).toHaveProperty('name', files[index].name)
      expect(loaded[index]).toHaveProperty('text', 'text')
    }
  })
})
