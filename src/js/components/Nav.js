import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const Nav = ({ routes }) => {
  const logoSrc = 'icon.png'
  return (
    <nav>
      <img src={logoSrc} alt='FC Barcelona shield' />
      {
        routes.map(({ name, path }, index) =>
          <Link to={path} key={index} className='nav-link'>{name}</Link>
        )
      }
    </nav>
  )
}

Nav.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object)
}
