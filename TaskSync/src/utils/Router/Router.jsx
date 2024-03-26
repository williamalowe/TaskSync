import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "../../views/Welcome/Welcome";
import Workspace from "../../views/Workspace/Workspace";
import Error from "../../views/Error/Error";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
      errorElement: <Error />
    },
    {
      path: "/workspace",
      element: <Workspace />,
    }
  ])

  return <RouterProvider router={router} />
}

export default Router
