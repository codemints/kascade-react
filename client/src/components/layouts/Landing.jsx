import { Outlet } from 'react-router-dom'
import Header from '@component/header/Header'

const Landing = () => {
  return (
    <>
      <header className="login-header bg-dark-100 dark:bg-dark-700">
        <Header />
      </header>
      <main className="login-main">
        <Outlet />
      </main>
    </>
  )
}

export default Landing
