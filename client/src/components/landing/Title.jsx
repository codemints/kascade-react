import React from 'react'
import Form from '@component/form/Form'
import styles from '@style/scoped/title.module.scss'

const Title = () => {
  const registerForm = {
    route: '/signup',
    typeOfForm: 'signup'
  }

  return (
    <section className={ `${styles['landing-page']}` }>
      <div className={ `${styles['hero-text']}` }>
        <h1 className="text-dark-200 dark:text-dark-600 font-theme font-heading">
          <span className={ `${styles['animate-gradient--background']} ${styles['background-color--1']} ${styles['content-fast']}` }>
            <span className={ `${styles['animate-gradient--foreground']}` }>Fast.</span>
          </span>
          <span className={ `${styles['animate-gradient--background']} ${styles['background-color--2']} ${styles['content-agile']}` }>
            <span className={ `${styles['animate-gradient--foreground']}` }>Agile.</span>
          </span>
          <span className={ `${styles['animate-gradient--background']} ${styles['background-color--3']} ${styles['content-easy']}` }>
            <span className={ `${styles['animate-gradient--foreground']}` }>Easy.</span>
          </span>
        </h1>
        <h2 className="text-pink-400">Progress takes teamwork.</h2>
      </div>
      <div className="form-wrapper">
        <Form data={ registerForm } />
      </div>
    </section>
  )
}

export default Title
