import React from "react";
import useBook from "../hooks/useBook";

type BookProps = {
  isbn: number;
};

const Book: React.FC<BookProps> = ({ isbn }) => {
  const [book, fetchBook] = useBook(isbn);

  return (
    <>
      <button onClick={fetchBook}>Fetch book</button>
      <div>Title: {book.title}</div>
      <div>SubTitle: {book.subtitle}</div>
      <div>Pages: {book.numPages}</div>
    </>
  );
};

export default Book;
