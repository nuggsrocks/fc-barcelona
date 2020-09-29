import React from 'react';
import {Link, Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import routes from './routes';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/js/all.js';
import '../scss/index.scss';

const App = () => {
	return (
		<BrowserRouter>
			<Menu />
			<div className='divider'/>
			<Main />
		</BrowserRouter>
	)
}

const Menu = () => {
	const handleClick = () => {
		let nav = document.querySelector('nav');
		if (nav.className === 'active') {
			nav.className = '';
		} else {
			nav.className = 'active';
		}
	};
	return (
		<header>
			
			
			<img
				id={'barca-logo'}
				src={'icon.png'}
				alt={'FC Barcelona Logo'}
			/>
			
			
			<h1>Futbol Club Barcelona</h1>

			<button onClick={handleClick}>
				<i className="fas fa-bars"/>
			</button>

			<div className='dropdown'>
			
				<nav>
					{
						routes.map(({path, name}) => 
							<Link key={name} to={path}>
								{name}
							</Link>
						)
					}
				</nav>
			</div>
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
