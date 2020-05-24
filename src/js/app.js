import React from 'react';
import {Link, Route, Switch, BrowserRouter} from 'react-router-dom';
import routes from './routes';

const App = () => {
	return (
		<BrowserRouter>
			<div className={'text-center p-5'}>
				<div className={'row'}>
					<div className={'col-md-3'}>
						<Menu />
					</div>
					<div className={'col-md-9'}>
						<Main />
					</div>
				</div>
			</div>
		</BrowserRouter>
	)
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
