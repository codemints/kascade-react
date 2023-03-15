import React from 'react'
import styles from '@style/scoped/darkmode.module.scss'

const Darkmode = () => {
  return (
    <div className={ styles['toggle-wrapper'] }>
      <p className="text-white">darkmode toggle</p>
    </div>
  )
}

export default Darkmode
