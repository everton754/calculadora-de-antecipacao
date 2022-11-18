import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AntecipationProvider } from './providers/Antecipation'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AntecipationProvider>
      <App />
    </AntecipationProvider>
  </React.StrictMode>
)
