import React from 'react'

const Title = () => {
  return (
    <section className="landing-page">
      <div className="hero-text">
        <h1 className="text-dark-200 dark:text-dark-600 font-theme font-heading">
          <span className="animate-gradient--background background-color--1 content-fast">
            <span className="animate-gradient--foreground">Fast.</span>
          </span>
          <span className="animate-gradient--background background-color--2 content-agile">
            <span className="animate-gradient--foreground">Agile.</span>
          </span>
          <span className="animate-gradient--background background-color--3 content-easy">
            <span className="animate-gradient--foreground">Easy.</span>
          </span>
        </h1>
        <h2 className="text-pink-400">Progress takes teamwork.</h2>
        <p className="dark:text-white">Fast and Flexible. Kascade gives you the organizational tools to get a clear view of where your project is at. Know who is doing what, and what still needs to be done. Jump-start your workflow with project management, onboarding, task management, brainstorming, and more</p>
        <button className="bg-pink-200 dark:bg-pink-400 border-pink-400 dark:border-white hover:border-pink-600 dark:hover:border-pink-100 text-white dark:hover:text-pink-100">
          <i className="fa-sharp fa-regular fa-pen-field"></i>
          <p>Try it today - It's Free</p>
        </button>
      </div>
    </section>
  )
}

export default Title
