import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React, {Suspense} from 'react';
import {Link, Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import routes from './routes';
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
				<Suspense fallback={<section/>}>	
				{
					routes.map(({path, Component}) =>
						<Route key={path} exact path={path}
							render={({match}) => {
								console.log(match);
								return <Component/>
							}}
						/>
						
					)
				}
				</Suspense>
				<Redirect to={'/history'}/>
			</Switch>
		</main>
	)
}

import('react-dom').then(({default: ReactDOM}) => {
	ReactDOM.render(<App/>, document.querySelector('#root'));
});
