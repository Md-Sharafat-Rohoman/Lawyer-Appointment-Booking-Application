import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './components/Router/Router.jsx'

createRoot(document.getElementById('root')).render(
  
    <Suspense fallback={<div>Data Loading.......</div>}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  ,
)
