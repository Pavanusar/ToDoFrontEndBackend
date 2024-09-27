import  React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Add";
import Read from "./components/List";
import Create from "./components/Edit";
import Update from "./components/Update";
import Edit from "./components/Edit";
import Add from "./components/Add";
import List from "./components/List";

const customRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/add",
        element: <Add/>,
      },
      {
        path: "/list",
        element: <List/>,
      },
      {
        path: "/edit",
        element: <Edit/>,
      },
      {
        path: "/update",
        element: <Update/>
      },
    ],
  },
]);

export default customRouter;
