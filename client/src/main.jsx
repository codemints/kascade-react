import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import '@style/main.scss'
import '@icon/font-awesome/scss/fontawesome.scss'
import '@icon/font-awesome/scss/brands.scss'
import '@icon/font-awesome/scss/sharp-regular.scss'
import '@icon/font-awesome/scss/sharp-solid.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
