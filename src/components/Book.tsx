import React from "react";
import useBook from "../hooks/useBook";

type BookProps = {
  isbn: number;
};

const Book: React.FC<BookProps> = ({ isbn }) => {
  const book = useBook(isbn);

  return (
    <>
      <div>Title: {book.title}</div>
      <div>SubTitle: {book.subtitle}</div>
      <div>Pages: {book.numPages}</div>
    </>
  );
};

export default Book;
