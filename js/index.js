import React from 'react';
import {Link, Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import routes from './routes';
import ReactDOM from 'react-dom';
import menuLogo from '@fortawesome/fontawesome-free/svgs/solid/bars.svg';
import '../scss/index.scss';

import barcaLogo from '../img/icon.png';

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
				src={barcaLogo}
				alt={'FC Barcelona Logo'}
			/>
			
			
			<h1>Futbol Club Barcelona</h1>

			<button onClick={handleClick}>
				<img src={menuLogo} alt='menu-logo'/>
			</button>

			
			
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
