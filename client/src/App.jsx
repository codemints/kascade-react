import Header from '@component/Header'

function App() {
  document.documentElement.classList.add('dark');

  return (
    <div className="App">
      <Header />
    </div>
  )
}

export default App
