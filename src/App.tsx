import { createBrowserRouter } from 'react-router-dom'
import { Home } from './components/home'
import { Login } from './components/login'
import { Admin } from './components/admin'
import { Social } from './components/social'

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/admin',
      element: <Admin/>
    },
    {
      path: '/admin/social',
      element: <Social/>
    }
  ])

export {router};

