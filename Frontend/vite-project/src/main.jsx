import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Authprovider from './Component/Auth/Context/Authprovider.jsx'

//for clear the local storage

createRoot(document.getElementById('root')).render(
  
    <Authprovider>
    <App />

    </Authprovider>
    

)
