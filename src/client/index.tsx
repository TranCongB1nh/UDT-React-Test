import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

const rootElement = document.getElementById('root')

if (rootElement) {
  hydrateRoot(
    rootElement,
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  )
} else {
  console.error("Root element not found. Ensure there is a div with id='root' in the HTML.")
}
