/* global React, render */
import { Link, BrowserRouter } from 'react-router-dom'
import { Nav } from '../Nav'

describe('<Nav/>', () => {
    it('should render logo in img element with links for each route', () => {
        const routes = [
            {name: 'foo', path: '/bar'}
        ]

        render(<BrowserRouter><Nav routes={routes} Link={Link} /></BrowserRouter>)

        expect(document.body).toMatchSnapshot()
    })
})