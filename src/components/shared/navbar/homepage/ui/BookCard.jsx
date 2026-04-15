import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <Link
      to={`/bookDetails/${book.bookId}`}
      className="card bg-base-100 w-96 shadow-sm"
    >
      <figure className="p-6 bg-gray-100">
        <img className="rounded-xl h-[250px]" src={book.image} />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-2">
          {(book.tags || []).map((tag) => (
            <div className="badge bg-green-100 text-green-500">{tag}</div>
          ))}
        </div>
        <h2 className="card-title font-bold text-2xl">{book.bookName}</h2>
        <p className="font-semibold">{book.author}</p>

        <div className="card-actions border-t border-dashed pt-4 border-gray-300 justify-between text-lg">
          <div className="font-semibold">{book.category}</div>
          <div className="font-semibold flex gap-2 ">
            {book.rating} <FaRegStar />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
