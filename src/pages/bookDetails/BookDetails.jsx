import { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../context/BookProvider";

const BookDetails = () => {
  const { bookId: bookParamsId } = useParams();
  const books = useLoaderData();

  const expectedBook = books.find(
    (book) => book.bookId === Number(bookParamsId),
  );

  // console.log(expectedBook, "Selected Book Details");

  if (!expectedBook) {
    return <div>Book not found.</div>;
  }

  const {
    author,
    bookName,
    category,
    image,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  const bookContext = useContext(BookContext);
  console.log(bookContext, "bookContext");

  const { storedBooks, setStoredBooks } = useContext(BookContext);
  const handleMarkAsRead = (currentBook) => {
    // Step 1: store book id
    // Step 2: where to store
    // Step 3: array or collection
    // Step 4: If the book is already exist, show an alert or toast
    // Step 5: If not then add the book in the array or collection

    const isExistBook = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      alert("The book already exists.");
    } else {
      const updatedBooks = [...storedBooks, currentBook];
      setStoredBooks(updatedBooks);
      alert(`${currentBook.bookName} is added to list`);
    }
  };

  return (
    <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto my-8">
      <figure className="bg-gray-100 w-full flex items-center justify-center rounded-2xl">
        <img src={image} className="w-[400px] p-6" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p>{author}</p>
        <p>{category}</p>
        <p>{review}</p>
        <div className="items-center gap-2">
          {tags.map((tag, ind) => (
            <div
              key={ind}
              className="badge text-green-500 bg-green-100 font-bold"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="card-actions border-t">
          <div className="flex justify-between items-center gap-2">
            <p>Total Pages: {totalPages}</p>
            <p> Publisher: {publisher}</p>
            <p>Year of Publishing: {yearOfPublishing}</p>
          </div>
          <div className=" flex gap-2">
            <button
              className="btn"
              onClick={() => handleMarkAsRead(expectedBook)}
            >
              Mark as Read
            </button>
            <button className="btn btn-primary">Add to Whishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
