import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Books from "../pages/books/Books";
import ErrorPage from "../pages/ErrorPage";
import Homepage from "../pages/homepage/Homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/books",
        element: <Books />,
      },
    ],
  },
]);
