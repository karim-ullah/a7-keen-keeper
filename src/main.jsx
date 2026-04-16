import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './pages/Home/HomePage.jsx'
import MainLayout from './mainlayout/MainLayout.jsx'
import Timeline from './pages/Home/timeline/Timeline.jsx'
import Stats from './pages/Home/Stats/Stats.jsx'
import FriendDetails from './pages/FriendDetails/FriendDetails.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import FriendProvider from './context/FriendProvider.jsx'
import { ToastContainer } from 'react-toastify'


const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {index: true, Component: HomePage},
      {path: 'timeline', Component: Timeline},
      {path: 'stats', Component: Stats},
      {
        path: 'friend-details/:id',
        loader: () => fetch('/Friends.json'),
        Component: FriendDetails
      }
      
      
    ],
    errorElement: <ErrorPage></ErrorPage>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <FriendProvider>
        <RouterProvider router={router}></RouterProvider>
          <ToastContainer />
      </FriendProvider>
    
  </StrictMode>,
)
