import React from "react";
import BookListItem from "./BookListItem";

interface Book {
  title: string;
}

export const BookList: React.VFC = () => {
  const books: Book[] = [
    { title: "A first Book" },
    { title: "Another awesome Book" },
    { title: "Learn React - the full book" },
  ];

  return (
    <>
      <h1>List of Books</h1>
      <ul>
        {books.map((book) => (
          <BookListItem title={book.title} key={book.title} />
        ))}
      </ul>
    </>
  );
};

export default BookList;
