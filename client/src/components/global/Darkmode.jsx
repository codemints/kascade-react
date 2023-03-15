import React from 'react'
import styles from '@style/scoped/darkmode.module.scss'

const Darkmode = () => {

  return (
    <div className={ styles['toggle-wrapper'] }>
      <input type="checkbox" id="toggle-switch" />
      <label htmlFor="toggle-switch" className="dark:bg-dark-600 dark:after:bg-pink-400"></label>
    </div>
  )
}

export default Darkmode
