import React from 'react'
import { routes } from '../routes'
import { Link } from 'react-router-dom'
import logo from '../../img/icon.png'

export const Menu = () => {
  return <nav>
    <img src={logo} alt={'FC Barcelona shield'}/>
    {
      routes.map(({ name, path }, index) =>
        <Link to={path} key={index} className={'nav-link'}>{name}</Link>
      )
    }
  </nav>
}
