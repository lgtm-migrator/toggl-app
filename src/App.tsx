import React from 'react'
import { Route } from 'react-router'
import ReportPage from './feature/Reports/presentation/pages/Reports'
import SettingsPage from './feature/Settings/Settings'
import AppBar from './core/AppBar/AppBar'
import { BrowserRouter } from 'react-router-dom'
import Content from './core/Content'

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Content>
        <Route exact={true} path="/" component={ReportPage} />
        <Route path="/settings" component={SettingsPage} />
      </Content>
    </BrowserRouter>
  )
}

export default App
