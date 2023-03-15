import React from 'react'
import Form from '@components/form/Form'
import styles from '@style/scoped/title.module.scss'

const Title = () => {
  const title = 'Get started'
  const subtitle = 'Create a new account'
  const button = 'Sign up'
  const route = '/signup'

  return (
    <section className={ `${styles['landing-page']}` }>
      <div className={ `${styles['hero-text']}` }>
        <h1 className="dark:text-dark-600 font-theme font-heading">
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
        <h2 className="dark:text-pink-400">Progress takes teamwork.</h2>
      </div>
      <div className="form-wrapper">
        <Form
          title={ title }
          subtitle={ subtitle }
          button={ button }
          route={ route } />
      </div>
    </section>
  )
}

export default Title
