import React, { use } from "react";
import BookCard from "./ui/BookCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  // console.log(books, "Books ");
  return (
    <div className="my-12">
      <h2 className="font-bold text-3x mb-6 text-center">Books</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => {
          return <BookCard book={book} />;
        })}
      </div>
    </div>
  );
};

export default AllBooks;
