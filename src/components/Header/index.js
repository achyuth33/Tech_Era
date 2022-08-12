import {Link, withRouter} from 'react-router-dom'

import {NavbarHeader, WebsiteLogo} from './styledComponents'

const Header = () => (
  <NavbarHeader>
    <Link to="/">
      <WebsiteLogo
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png "
        alt="website logo"
      />
    </Link>
  </NavbarHeader>
)

export default withRouter(Header)
