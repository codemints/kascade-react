import React from 'react'
import Darkmode from '@component/Darkmode'
import Social from '@component/Social'
import styles from '@style/scoped/header.module.scss'
import logoDark from '@image/logo-dark.png'

const Header = () => {
  return (
    <header className={ styles['login-header'] }>
      <Darkmode />
      <div className="site-logo">
        <a href="/">
          <img src={ logoDark } alt="" />
        </a>
      </div>
      <Social />
    </header>
  )
}

export default Header
