import React from 'react'
import styles from '@style/scoped/darkmode.module.scss'

const Darkmode = () => {
  const toggleDarkMode = () => {
    const root = document.documentElement
    root.classList.toggle('dark')
  }

  return (
    <div className={ styles['toggle-wrapper'] }>
      <input
        onClick={ toggleDarkMode }
        type="checkbox"
        id="toggle-switch"
      />
      <label htmlFor="toggle-switch" className="bg-dark-200 after:bg-pink-400 dark:bg-dark-600"></label>
    </div>
  )
}

export default Darkmode
