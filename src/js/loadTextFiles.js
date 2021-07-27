export const loadTextFiles = async (fetch, files) => {
  const loaded = []

  for (const file of files) {
    const res = await fetch(file.url)
    const text = await res.text()
    loaded.push({ name: file.name, text })
  }

  return loaded
}
