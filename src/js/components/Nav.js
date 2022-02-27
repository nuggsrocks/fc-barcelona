import React from 'react'
import PropTypes from 'prop-types'

export const Nav = ({ routes, Link }) => {
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
  routes: PropTypes.arrayOf(PropTypes.object),
  Link: PropTypes.object
}
