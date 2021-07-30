import { FansView } from './views/FansView'
import { HistoryView } from './views/HistoryView'
import { PlayersView } from './views/PlayersView'
import { RivalsView } from './views/RivalsView'
import { StadiumView } from './views/StadiumView'

export const routes = [
  {name: 'History', path: '/', Component: HistoryView},
  {name: 'Fans', path: '/fans', Component: FansView},
  {name: 'Players', path: '/players', Component: PlayersView},
  {name: 'Rivals', path: '/rivals', Component: RivalsView},
  {name: 'Stadium', path: '/stadium', Component: StadiumView}
]
