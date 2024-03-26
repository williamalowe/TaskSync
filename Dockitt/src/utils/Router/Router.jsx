import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "../../views/App/App"
import Tasks from "../../views/Tasks/Tasks"

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <>Error</>,
      children: [
        { path: "tasklist", element: <Tasks /> },
        { path: "dashboard", element: <>Dashboard</> }
      ]
    },
    {
      // 
    }
  ])
  return <RouterProvider router={router} />
}

export default Router
