import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Tabs from './tabs/tabs'
import './index.css'
import { Layout } from './layout'
import { MachineTesting } from './machine/machine'

const router = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
      { path: '/tabs', element: <Tabs /> },
      { path: '/xstate', element: <MachineTesting /> },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
