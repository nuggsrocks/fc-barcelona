import React from 'react';
import {Link, Route, Switch, BrowserRouter} from 'react-router-dom';
import constants from './constants';
import routes from './routes';

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
        if (page === constants.HISTORY) {
            this.setState({
                history: true,
                stadium: false,
                rivals: false,
                fans: false,
                players: false
            })
        }
        if (page === constants.STADIUM) {
            this.setState({
                history: false,
                stadium: true,
                rivals: false,
                fans: false,
                players: false
            })
        }
        if (page === constants.RIVALS) {
            this.setState({
                history: false,
                stadium: false,
                rivals: true,
                fans: false,
                players: false
            })
        }
        if (page === constants.FANS) {
            this.setState({
                history: false,
                stadium: false,
                rivals: false,
                fans: true,
                players: false
            })
        }
        if (page === constants.PLAYERS) {
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
            <BrowserRouter>
                <div className={'text-center p-5'}>
                    <div className={'row'}>
                        <div className={'col-md-3'}>
                            <Menu
                                history={() => this.handleChange(constants.HISTORY)} stadium={() => this.handleChange(constants.STADIUM)}
                                rivals={() => this.handleChange(constants.RIVALS)} fans={() => this.handleChange(constants.FANS)}
                                players={() => this.handleChange(constants.PLAYERS)}
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
            </BrowserRouter>
        )
    }
}

const Menu = () => {
    return (
        <div>
            <div>
                <img
                    id={'barca-logo'}
                    src={'icon.png'}
                    alt={'FC Barcelona Logo'}
                />
            </div>
            <h1>Futbol Club Barcelona</h1>
            <nav>
                {routes.map(({path, name}) =>
                    <Link key={name} to={path} className={'btn btn-block barca-btn rounded-lg'}>
                        {name}
                    </Link>
                )}
            </nav>
        </div>
    )
}

const Main = () => {
    return (
        <div>
            <Switch>
                {routes.map(({path, Component}) => (
                    <Route key={path} exact path={path}>
                        <Component />
                    </Route>
                ))}
            </Switch>
        </div>
    )
}

export default App;