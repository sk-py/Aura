import React from 'react';
import Navbar from "./features/Navbar/Navbar";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Homepage from "./Pages/HomePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Homepage></Homepage>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
