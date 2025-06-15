import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import Main from "./Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

createRoot(document.getElementById("root")).render(
  <div className="max-w-screen-xl mx-auto">
    <RouterProvider router={router} />
  </div>
);
