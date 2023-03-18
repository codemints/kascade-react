import { Link } from 'react-router-dom'
import { useDarkmode } from '@store/darkmode'
import Darkmode from '@component/global/Darkmode'
import Social from '@component/global/Social'
import logoDark from '@image/logo-dark.png'
import logoLight from '@image/logo-light.png'

const Header = () => {
  const { darkmode } = useDarkmode()

  return (
    <div className="header-content">
      <Darkmode />
      <div className="site-logo">
        <Link to="/">
          <img src={ darkmode ? logoDark : logoLight } alt="" />
        </Link>
      </div>
      <Social />
    </div>
  )
}

export default Header
