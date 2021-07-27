export const formatText = (string = '') => {
  const paragraphs = string.split('/n')

  return paragraphs.map(p => p.trim())
}
