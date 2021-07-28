import React from 'react'
import { App } from './app'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link } from 'react-router-dom'


const Index = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to={'/fans'}>Fans</Link>
      </nav>
      <App/>
    </BrowserRouter>
  )
}

ReactDOM.render(<Index/>, document.querySelector('#root'))
