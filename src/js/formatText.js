export const formatText = (string = '') => {
  let paragraphs = string.split('\n')

  paragraphs = paragraphs.map(p => p.trim())

  return paragraphs.filter(value => value !== '')
}
