import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const BookContext = createContext(null);

const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState([]);
  const bookData = { storedBooks, setStoredBooks };

  return (
    <BookContext.Provider value={bookData}>{children}</BookContext.Provider>
  );
};

export default BookProvider;
