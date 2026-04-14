import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './pages/Home/HomePage.jsx'
import MainLayout from './mainlayout/MainLayout.jsx'
import Timeline from './pages/Home/timeline/Timeline.jsx'
import Stats from './pages/Home/Stats/Stats.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {index: true, Component: HomePage},
      {path: 'timeline', Component: Timeline},
      {path: 'stats', Component: Stats}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
