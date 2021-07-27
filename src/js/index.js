import 'core-js/stable'
import 'regenerator-runtime/runtime'
import '../scss/index.scss'

const init = async () => {
  try {
    const { default: React, Suspense } = await import('react')

    const { default: ReactDOM } = await import('react-dom')

    const {
      Link,
      BrowserRouter,
      Switch,
      Route,
      Redirect
    } = await import('react-router-dom')

    const { routes } = await import('./routes')

    const { default: menuLogo } = await import('@fortawesome/fontawesome-free/svgs/solid/bars.svg')

    const { default: barcaLogo } = await import('../img/icon.png')

    const App = () => {
      return (
        <BrowserRouter>
          <Menu/>
          <div className='divider'/>
          <Main/>
        </BrowserRouter>
      )
    }

    const Menu = () => {
      const handleClick = () => {
        const nav = document.querySelector('nav')
        if (nav.className === 'active') {
          nav.className = ''
        } else {
          nav.className = 'active'
        }
      }
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
              routes.map(({ path, name }) =>
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
                routes.map(({ path, Component }) =>
                  <Route key={path} exact path={path}
                         render={() => <Component/>}
                  />
                )
              }
              <Route>
                <Redirect to={'/history'}/>
              </Route>
            </Suspense>
          </Switch>
        </main>
      )
    }

    ReactDOM.render(<App/>, document.querySelector('#root'))
  } catch (e) {
    console.log(e)
  }
}

init().catch(e => {

})
