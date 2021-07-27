import { History, Fans, Players, Rivals, Stadium } from './components'

export const routes = [
  { path: '/history', name: 'History', Component: History },
  { path: '/stadium', name: 'Stadium', Component: Stadium },
  { path: '/rivals', name: 'Rivals', Component: Rivals },
  { path: '/fans', name: 'Fans', Component: Fans },
  { path: '/players', name: 'Players', Component: Players }
]
