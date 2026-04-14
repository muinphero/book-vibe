import React, { use } from "react";
import BookCard from "./ui/BookCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  console.log(books, "Books ");
  return (
    <div className="my-12">
      <h2 className="font-bold text-3xl text-center mb-6">Books</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.map((book) => {
          return <BookCard key={book.bookId} book={book} />;
        })}
      </div>
    </div>
  );
};

export default AllBooks;
