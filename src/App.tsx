import React from 'react'
import './App.css'
import { Route } from 'react-router'
import ReportPage from './pages/Reports/Reports'
import SettingsPage from './pages/Settings/Settings'
import AppBar from './common/AppBar/AppBar'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Route exact={true} path="/" component={ReportPage} />
      <Route path="/settings" component={SettingsPage} />
    </BrowserRouter>
  )
}

export default App
