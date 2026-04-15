import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Books from "../pages/books/Books";
import ErrorPage from "../pages/ErrorPage";
import Homepage from "../pages/homepage/Homepage";
import BookDetails from "../pages/bookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    HydrateFallback: () => <div>Loading application...</div>,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/bookDetails/:bookId",
        Component: BookDetails,
        loader: async () => {
          const response = await fetch("/booksData.json");
          return response.json();
        },
      },
    ],
  },
]);
