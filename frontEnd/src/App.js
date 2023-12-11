import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Homepage from "./Pages/HomePage";
import JobDetailsPage from './Pages/JobDetailsPage';
import LoginPage from './Pages/LoginPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Homepage></Homepage>
    ),
  },
  {
    path: "jobdetails",
    element: <JobDetailsPage></JobDetailsPage>,
  },
  {
    path: "login",
    element: <LoginPage></LoginPage>,
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
