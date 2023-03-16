import React, { useEffect } from 'react'
import { useDarkmode } from '@store/darkmode'
import styles from '@style/scoped/darkmode.module.scss'

const Darkmode = () => {
  const { darkmode, toggleDarkmode } = useDarkmode()

  return (
    <div className={ styles['toggle-wrapper'] }>
      <input
        onClick={ toggleDarkmode }
        type="checkbox"
        id="toggle-switch"
      />
      <label htmlFor="toggle-switch" className="bg-dark-200 after:bg-pink-400 dark:bg-dark-600"></label>
    </div>
  )
}

export default Darkmode
