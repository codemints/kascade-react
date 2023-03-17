import { useEffect, useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { useDarkmode } from '@store/darkmode'
import Header from '@component/header/Header'
import Title from '@component/landing/Title'
import Form from '@component/form/Form'

function App() {
  const { darkmode, setDarkmode } = useDarkmode()

  const registerForm = {
    endPoint: '/signup',
    typeOfForm: 'register'
  }
  const loginForm = {
    route: '/signup',
    typeOfForm: 'login'
  }

  useEffect(() => {
    // setDarkmode(false)
  }, [])

  useEffect(() => {
    darkmode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
  }, [darkmode])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Title />,
    },
    {
      path: '/register',
      element: <Form data={registerForm} />,
    },
    {
      path: '/login',
      element: <Form data={loginForm} />,
    }
  ])

  return (
    <div className="App">
      <header className="login-header bg-dark-100 dark:bg-dark-700">
        <Header />
      </header>
      <main className="login-main">
        <RouterProvider router={router} />
      </main>
    </div>
  )
}

export default App
