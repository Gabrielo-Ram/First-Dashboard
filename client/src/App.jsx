import { useState, useEffect } from 'react'
import './styles/App.css'
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './components/Dashboard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar />
      <div className='w-15/16 h-screen ml-[8%] flex flex-col justify-center align-middle'>
        <Dashboard />
      </div>
    </>
  )
}

export default App
