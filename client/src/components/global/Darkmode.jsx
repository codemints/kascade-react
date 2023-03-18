import React, { useEffect } from 'react'
import { useDarkmode } from '@store/darkmode'
import styles from '@style/scoped/darkmode.module.scss'

const Darkmode = () => {
  const { darkmode, toggleDarkmode } = useDarkmode()

  return (
    <div className={ styles['toggle-wrapper'] }>
      <i className="fa-sharp fa-regular fa-moon-stars text-dark-200 dark:text-dark-400"></i>
      <div className={ styles['toggle-switch']}>
        <input
          onClick={ toggleDarkmode }
          type="checkbox"
          id="toggle-switch"
          className={ darkmode ? undefined : styles['is-light'] }
        />
        <label htmlFor="toggle-switch" className="bg-dark-400 after:bg-pink-400 dark:bg-dark-600"></label>
      </div>
      <i className="fa-sharp fa-regular fa-sun text-dark-200 dark:text-dark-400"></i>
    </div>
  )
}

export default Darkmode
