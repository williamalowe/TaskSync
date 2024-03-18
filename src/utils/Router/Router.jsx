import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Welcome from "../../views/Welcome/Welcome"

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
      errorElement: <>ERROR</>
    }
  ])

  return <RouterProvider router={router} />
}

export default Router
