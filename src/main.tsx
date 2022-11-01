import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './style/index.css'
import { RoutesRoot } from './RoutesRoot'
import { store } from './redux/store'
import { Provider } from 'react-redux'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={RoutesRoot} />
  </Provider>
)
