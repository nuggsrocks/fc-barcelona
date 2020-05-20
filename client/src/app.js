import React from 'react';
import {BrowserRouter, Link, Route, Redirect} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import History from './components/history.js';
import Stadium from './components/stadium.js';
import Rivals from './components/rivals.js';
import Fans from './components/fans.js';
import Players from './components/players.js';

const HISTORY = 'history';
const STADIUM = 'stadium';
const RIVALS = 'rivals';
const FANS = 'fans';
const PLAYERS = 'players';

const routes = [
    {path: '/barcelona/history', name: HISTORY, Component: History},
    {path: '/barcelona/stadium', name: STADIUM, Component: Stadium},
    {path: '/barcelona/rivals', name: RIVALS, Component: Rivals},
    {path: '/barcelona/fans', name: FANS, Component: Fans},
    {path: '/barcelona/players', name: PLAYERS, Component: Players}
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: true,
            stadium: false,
            rivals: false,
            fans: false,
            players: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(page) {
        if (page === HISTORY) {
            this.setState({
                history: true,
                stadium: false,
                rivals: false,
                fans: false,
                players: false
            })
        }
        if (page === STADIUM) {
            this.setState({
                history: false,
                stadium: true,
                rivals: false,
                fans: false,
                players: false
            })
        }
        if (page === RIVALS) {
            this.setState({
                history: false,
                stadium: false,
                rivals: true,
                fans: false,
                players: false
            })
        }
        if (page === FANS) {
            this.setState({
                history: false,
                stadium: false,
                rivals: false,
                fans: true,
                players: false
            })
        }
        if (page === PLAYERS) {
            this.setState({
                history: false,
                stadium: false,
                rivals: false,
                fans: false,
                players: true
            })
        }
    }

    render() {
        return (
            <div className={'text-center p-5'}>
                <div className={'row'}>
                    <div className={'col-md-3'}>
                        <Menu
                            history={() => this.handleChange(HISTORY)} stadium={() => this.handleChange(STADIUM)}
                            rivals={() => this.handleChange(RIVALS)} fans={() => this.handleChange(FANS)}
                            players={() => this.handleChange(PLAYERS)}
                        />
                    </div>
                    <div className={'col-md-9'}>
                        <Main
                            history={this.state.history} stadium={this.state.stadium}
                            rivals={this.state.rivals} fans={this.state.fans}
                            players={this.state.players}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const Menu = () => {
    return (
        <div>
            <div>
                <img id={'barca-logo'}
                     src={'favicon.ico'}
                     alt={'FC Barcelona Logo'}
                />
            </div>
            <h1>Futbol Club Barcelona</h1>
            <nav>
                <Link to={'/barcelona/history'} className={'btn btn-block barca-btn rounded-lg'}>
                    History
                </Link>
                <Link to={'/barcelona/stadium'} className={'btn btn-block barca-btn rounded-lg'}>
                    Stadium
                </Link>
                <Link to={'/barcelona/rivals'} className={'btn btn-block barca-btn rounded-lg'}>
                    Rivalries
                </Link>
                <Link to={'/barcelona/fans'} className={'btn btn-block barca-btn rounded-lg'}>
                    Fans
                </Link>
                <Link to={'/barcelona/players'} className={'btn btn-block barca-btn rounded-lg'}>
                    Players
                </Link>
            </nav>
        </div>
    )
}

const Main = () => {
    return (
        <div>
            {routes.map(({path, Component}) => (
                <Route key={path} exact path={path}>
                    {({match}) => (
                        <CSSTransition
                            in={match != null}
                            timeout={1000}
                            classNames={'app-transition'}
                            unmountOnExit
                        >
                            <div className={'app-transition'}>
                                <Component />
                            </div>
                        </CSSTransition>
                    )}
                </Route>
            ))}
            <Redirect to={'/barcelona/history'} />
        </div>
    )
}

export default App;