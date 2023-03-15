import Header from '@component/header/Header'
import Title from '@component/landing/Title'

function App() {
  document.documentElement.classList.add('dark');

  return (
    <div className="App">
      <Header />
      <Title />
    </div>
  )
}

export default App
