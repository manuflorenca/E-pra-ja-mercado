import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header'


function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/cadastro'

  return (
    <>
      { !isAuthPage && <Header /> }
      <Outlet />
    </>
  )
}

export default App
