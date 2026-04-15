import React, { useContext } from "react";
import { BookContext } from "../../context/BookProvider";

const Books = () => {
  const { storedBooks } = useContext(BookContext);
  console.log(storedBooks, "bookContext");

  return <div>Listed Books</div>;
};

export default Books;
