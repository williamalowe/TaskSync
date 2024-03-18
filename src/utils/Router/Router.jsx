import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "../../views/Welcome/Welcome";
import Workspace from "../../views/Workspace/Workspace";


const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
      errorElement: <>ERROR</>
    },
    {
      path: "/workspace",
      element: <Workspace />,
    }
  ])

  return <RouterProvider router={router} />
}

export default Router
