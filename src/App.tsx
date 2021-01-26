import React from 'react'
import './App.css'
import { Route } from 'react-router'
import ReportPage from './pages/reports'
import SettingsPage from './pages/settings'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Route exact={true} path="/" component={ReportPage} />
      <Route path="/settings" component={SettingsPage} />
    </BrowserRouter>
  )
}

export default App
