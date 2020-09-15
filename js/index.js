import React from 'react';
import {Link, Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import routes from './routes';
import ReactDOM from 'react-dom';
import '../scss/index.scss';

const App = () => {
	return (
		<BrowserRouter>
			<Menu />
			<Main />
		</BrowserRouter>
	)
}

const Menu = () => {
	return (
		<header>
			
			
			<img
				id={'barca-logo'}
				src={'icon.png'}
				alt={'FC Barcelona Logo'}
			/>
			
			
			<h1>Futbol Club Barcelona</h1>
			<nav>
				{
					routes.map(({path, name}) =>
						<Link key={name} to={path}>
							{name}
						</Link>
					)
				}
			</nav>
		</header>
	)
}

const Main = () => {
	return (
		<main>
			<Switch>
				{routes.map(({path, Component}) => (
					<Route key={path} exact path={path}>
						<Component />
					</Route>
				))}
				<Redirect to={'/history'}/>
			</Switch>
		</main>
	)
}

ReactDOM.render(<App/>, document.querySelector('#root'));
