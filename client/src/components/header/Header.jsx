import React from 'react'
import { Link } from 'react-router-dom'
import Darkmode from '@component/global/Darkmode'
import Social from '@component/global/Social'
import styles from '@style/scoped/header.module.scss'
import logoDark from '@image/logo-dark.png'

const Header = () => {
  return (
    <header className={ `${styles['login-header']} bg-dark-100 dark:bg-dark-700` }>
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
