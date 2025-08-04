import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import A  from './App.jsx'
import {BrowserRouter}  from 'react-router-dom'
import Context from './Context.jsx'
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>   
    <Context.Provider   value={"heheheh"}>  
   <A/>
   </Context.Provider>
   </BrowserRouter>
  </StrictMode>
)
