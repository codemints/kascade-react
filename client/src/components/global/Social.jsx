import React from 'react'
import styles from '@style/scoped/social.module.scss'

const socialLinks = {
  github: {
    url: 'https://github.com/codemints',
    icon: 'fa-github-alt',
    label: 'Github',
  },
  codepen: {
    url: 'https://www.codepen.io/codemints',
    icon: 'fa-codepen',
    label: 'Codepen',
  },
  linkedin: {
    url: 'https://twitter.com/iamcodemints',
    icon: 'fa-linkedin-in',
    label: 'Linkedin',
  },
  twitter: {
    url: 'https://www.linkedin.com/in/codemints',
    icon: 'fa-twitter',
    label: 'Twitter',
  },
}

const Social = () => {
  return (
    <div className={ styles['social-wrapper'] }>
      <ul>
        { Object.entries(socialLinks).map(([key, value]) => (
            <li key={ key }>
              <a href={ value.url } target="_blank">
                <i className={ `fa-brands ${value.icon} dark:text-pink-400 dark:hover:text-pink-600` } aria-label={ `Link to ${key}`}></i>
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default Social
