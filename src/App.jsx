import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout location={"landing"} />,
    },
    {
      path: "/Anatomy",
      element: <Layout location={"anatomy"} />,
    },
    {
      path: "/Applications",
      element: <Layout location={"applications"}/>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
