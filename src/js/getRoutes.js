export const getRoutes = async () => {
  const routes = [
    { name: 'History', path: '/' },
    { name: 'Fans', path: '/fans' },
    { name: 'Players', path: '/players' },
    { name: 'Rivals', path: '/rivals' },
    { name: 'Stadium', path: '/stadium' }
  ]

  for (const route of routes) {
    const res = await fetch(`/text/${route.name.toLowerCase()}.txt`)
    const text = await res.text()
    route.text = text
  }

  return routes
}
