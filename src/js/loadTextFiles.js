export const loadTextFiles = async (fetch, files) => {
  const loaded = {}

  for (const key in files) {
    const res = await fetch(files[key])
    loaded[key] = await res.text()
  }

  return loaded
}
