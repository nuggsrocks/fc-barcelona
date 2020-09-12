import History from './components/history';
import Stadium from './components/stadium';
import Rivals from './components/rivals';
import Fans from './components/fans';
import Players from './components/players';

const routes = [
    {path: '/history', name: 'History', Component: History},
    {path: '/stadium', name: 'Stadium', Component: Stadium},
    {path: '/rivals', name: 'Rivals', Component: Rivals},
    {path: '/fans', name: 'Fans', Component: Fans},
    {path: '/players', name: 'Players', Component: Players}
];

export default routes;
