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
    {
      path: "/Techniques",
      element: <Layout location={"techniques"}/>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
