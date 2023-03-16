import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const Form = ({data: {route, typeOfForm}}) => {
  const [type, setType] = useState('')
  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  useEffect(() => {
    typeOfForm === 'register' ? setType(true) : setType(false)
    console.log(type)
  }, [])

  watch('email')

  const onSubmit = (data) => {

  }

  return (
    <div className="form-inner text-dark-600 dark:text-white">
      <div className="form-intro">
        <h3>{ type ? 'Get started' : 'Welcome back'}</h3>
        <h4>{ type ? 'Create a new account' : 'Sign in to your account'}</h4>
      </div>

      <div className="form-auth">
        <button className="border-dark-200 hover:border-dark-400 bg-dark-100 dark:border-blue-500 dark:hover:border-blue-400 dark:bg-dark-600">
          <div className="button-inner">
            <i className="fa-brands fa-github" type="button" aria-label="Authorize with GitHub"></i>
            <p>{ `${type ? 'Continue' : "Sign in"} with GitHub` }</p>
          </div>
        </button>
        <button className="border-dark-200 hover:border-dark-400 dark:border-blue-500 dark:hover:border-blue-400">
          <div className="button-inner">
            <i className="fa-brands fa-google" type="button" aria-label="Authorize with Google"></i>
            <p>{ `${type ? 'Continue' : "Sign in"} with Google` }</p>
          </div>
        </button>

      </div>

      <div className="form-divider">
        <div className="divider-line bg-dark-200 dark:bg-blue-500">
        </div>
        <div className="divider-text bg-white dark:bg-dark-800">
          <span className="">or</span>
        </div>
      </div>

      <form onSubmit={ handleSubmit(onSubmit) }>
        <div className="input-group">
          <label htmlFor="user-email">Email</label>
          <input
            { ...register('email', {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
            type="email"
            placeholder="user@user.com"
            id="user-email"
            className="border-blue-400 dark:border-white" />
          { errors.email && <p>{ errors.email.message }</p> }
        </div>
        <div className="input-group">
          <label htmlFor="user-password">Password</label>
          <input
            { ...register('password', {
              required: "Password is required",
              pattern: {
                value: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[*?!\-_])[A-Za-z0-9*?!\-_]{10,}$/,
                message: "Invalid password"
              }
            }) }
            type="text"
            placeholder="**********"
            id="user-password"
            className="border-blue-400 dark:border-white" />
          { errors.password && <p>{ errors.password.message }</p> }
        </div>
          <input
            type="submit"
            value={ `${type ? 'Register' : 'Signin'}` }
            className="bg-pink-200 dark:bg-pink-400 border-pink-400 dark:border-pink-200 hover:border-pink-600 dark:hover:border-pink-100 text-white"
          />
      </form>
      <p className="form-switcher text-dark-600 dark:text-pink-400">{ type ? 'Already registered?' : 'Not registered yet?' } <a
          href="#"
          className="text-pink-600 dark:text-white"
          >
            Sign { type ? 'in' : 'up' } now
        </a>
      </p>
    </div>
  )
}

export default Form
