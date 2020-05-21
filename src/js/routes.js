import History from './components/history';
import Stadium from './components/stadium';
import Rivals from './components/rivals';
import Fans from './components/fans';
import Players from './components/players';
import NotFound from './components/not-found';
import constants from './constants';

const routes = [
    {path: '/barcelona/history', name: constants.HISTORY, Component: History},
    {path: '/barcelona/stadium', name: constants.STADIUM, Component: Stadium},
    {path: '/barcelona/rivals', name: constants.RIVALS, Component: Rivals},
    {path: '/barcelona/fans', name: constants.FANS, Component: Fans},
    {path: '/barcelona/players', name: constants.PLAYERS, Component: Players},
    {Component: NotFound}
];

export default routes;