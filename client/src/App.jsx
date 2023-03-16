import { useEffect, useState } from 'react'
import { useDarkmode } from '@store/darkmode'
import Header from '@component/header/Header'
import Title from '@component/landing/Title'

function App() {
  const { darkmode, setDarkmode } = useDarkmode()

  useEffect(() => {
    setDarkmode(true)
  }, [])

  useEffect(() => {
    darkmode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
  }, [darkmode])

  return (
    <div className="App">
      <Header />
      <Title />
    </div>
  )
}

export default App
