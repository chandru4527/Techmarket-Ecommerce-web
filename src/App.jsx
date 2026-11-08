import React from 'react'
import { RouterProvider } from "react-router-dom";


import routers from './routes/router'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <RouterProvider router={routers} />
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop
        closeOnClick
        draggable={true}
      />
    </>
  )
}

export default App