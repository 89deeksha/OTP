import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Authcontext from './Component/Auth/Context/Authcontext.jsx'
import Taskcontext from './Component/Auth/Context/Taskcontext.jsx'
//for clear the local storage

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authcontext>
      <Taskcontext>
    <App />
    </Taskcontext>
    </Authcontext>
  </StrictMode>,
)
