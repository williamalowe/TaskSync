import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "../../views/App/App"

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <>Error</>,
      children: [
        {path: "tasklist", element: <>TaskList</>},
        {path: "dashboard", element: <>Dashboard</>}
      ]
    },
    {
      // 
    }
  ])
  return <RouterProvider router={router} />
}

export default Router
