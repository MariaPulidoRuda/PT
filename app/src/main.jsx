import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './App'
import Home from './pages/Home'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route
            path="*"
            element={
              <main>
                <p>404 - NOT FOUND!</p> 
              </main>
            }
          ></Route>
        </Route> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
) 

