import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Form = ({data: {endPoint, typeOfForm}}) => {
  const [type, setType] = useState(null)
  const [required, setRequired] = useState({uppercase: false, number: false, special: false})

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState(null)
  const [formData, setFormData] = useState({})

  const NODE_ENV = process.env.NODE_ENV
  const API_URL = NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://kascade-server.onrender.com'

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const password = watch('password')

  useEffect(() => {
    typeOfForm === 'signup' ? setType(true) : setType(false)
  }, [typeOfForm])

  useEffect(() => {
    const uppercase = /[A-Z]/
    const number = /[0-9]/
    const special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/

    if ( password !== undefined ) {
      setRequired(
        {
          uppercase: uppercase.test(password),
          number: number.test(password),
          special: special.test(password)
        }
      )
    }
  }, [password])

  const onSubmit = async (data) => {
    await axios
    .post(`${API_URL}/${endPoint}`, data)
    .then(res => {
      console.log(res.data)
    })
  }

  return (
    <>
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
          { type &&
            <div className="input-group">
              <label htmlFor="user-name">Username</label>
              <input
                {...register('username', {
                  required: "Username is required"
                })}
                type="text"
                placeholder="awesomeuser2023"
                id="user-name"className="border-blue-400 dark:border-white"
                aria-invalid={ errors.username ? "true" : "false"} />
              { errors.username && <p className="error-text">{ errors.username.message }</p> }
            </div>
          }
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
              placeholder="youremail@example.com"
              id="user-email"
              className="border-blue-400 dark:border-white"
              aria-invalid={ errors.email ? "true" : "false"} />
            { errors.email && <p className="error-text">{ errors.email.message }</p> }
          </div>
          <div className="input-group">
            <label htmlFor="user-password">Password</label>
            <input
              { ...register('password', {
                required: "Password is required",
                minLength: {
                  value: 10,
                  message: "Password must be at least 10 characters"
                },
                pattern:  {
                  value: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[*?!\-_])[A-Za-z0-9*?!\-_]{10,}$/,
                  message: "Password must contain at least one of each:"
                }
              }) }
              type="text"
              placeholder="**********"
              id="user-password"
              className="border-blue-400 dark:border-white"
              aria-invalid={ errors.email ? "true" : "false"} />
            { errors.password &&
              <div className="error-text">
                <h3>{ errors.password.message }</h3>
                { errors.password.type === 'pattern' &&
                  <>
                    <p className={ `${required.uppercase ? 'before:bg-pink-600' : 'before:bg-transparent'} before:border-dark-400` }>Uppercase letter</p>
                    <p className={ `${required.number ? 'before:bg-pink-600' : 'before:bg-transparent'} before:border-dark-400` }>Number</p>
                    <p className={ `${required.special ? 'before:bg-pink-600' : 'before:bg-transparent'} before:border-dark-400` }>Special character</p>
                  </>
                }
              </div>
            }
          </div>
            <input
              type="submit"
              value={ `${type ? 'Register' : 'Signin'}` }
              disabled={ (type && !watch('username')) || !watch('email') || !watch('password') }
              title={ `Please enter a valid email and password to ${type ? 'register' : 'sign in'}.`}
              className="bg-pink-200 dark:bg-pink-400 border-pink-400 dark:border-pink-200 hover:border-pink-600 dark:hover:border-pink-100 text-white"
            />
        </form>
        <p className="form-switcher text-dark-600 dark:text-pink-400">{ type ? 'Already registered?' : 'Not registered yet?' } <Link to={ type ? '/login' : '/register'} className="text-pink-600 dark:text-white" >Sign { type ? 'in' : 'up' } now</Link></p>
      </div>
    </>
  )
}

export default Form