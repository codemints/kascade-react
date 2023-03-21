import { useEffect, useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { useDarkmode } from '@store/darkmode'
import Landing from '@component/layouts/Landing'
import Dashboard from '@component/layouts/Dashboard'
import Title from '@component/landing/Title'
import Form from '@component/form/Form'
import Verify from '@component/form/Verify'

function App() {
  const { darkmode, setDarkmode } = useDarkmode()

  const signupForm = {
    endPoint: 'signup',
    typeOfForm: 'signup'
  }
  const loginForm = {
    endpoint: 'login',
    typeOfForm: 'login'
  }

  useEffect(() => {
    // setDarkmode(false)
  }, [])

  useEffect(() => {
    darkmode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
  }, [darkmode])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Landing />}>
          <Route index element={<Title />} />
          <Route path="register" element={<Form data={signupForm} />} />
          <Route path="login" element={<Form data={loginForm} />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/verify" element={<Verify />} />
      </>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
