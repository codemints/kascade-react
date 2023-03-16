import React from 'react'
import { useForm } from 'react-hook-form'

const Form = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const data = props.data

  const onSubmit = (data) => {

  }

  return (
    <div className="form-inner dark:text-white">
      <div className="form-intro">
        <h3>{ data.title }</h3>
        <h4>{ data.subtitle }</h4>
      </div>

      <div className="form-auth">
        <button>
          <div className="button-inner">
            <i className="fa-brands fa-github" type="button" aria-label="Authorize with GitHub"></i>
            <h4>{ `${data.typeOfForm === 'register' ? 'Continue' : "Sign in"} with GitHub` }</h4>
          </div>
        </button>
        <button>
          <div className="button-inner">
            <i className="fa-brands fa-google" type="button" aria-label="Authorize with Google"></i>
            <h4>{ `${data.typeOfForm === 'register' ? 'Continue' : "Sign in"} with Google` }</h4>
          </div>
        </button>
      </div>

      <form onSubmit={ handleSubmit(onSubmit) }>
        <label htmlFor="user-email">Enter Email</label>
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
          id="user-email" />
        <label htmlFor="user-password">Enter Password</label>
        <input
          { ...register('password', {
            required: "Password is required",
            pattern: {
              value: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[*?!\-_])[A-Za-z0-9*?!\-_]{10,}$/,
              message: "Invalid password"
            }
          }) }
          type="text"
          placeholder="********"
          id="user-password" />
      </form>
    </div>
  )
}

export default Form
