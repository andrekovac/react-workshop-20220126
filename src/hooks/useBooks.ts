import { useEffect, useState } from "react";

export interface BookI {
  title?: string | null;
  subtitle?: string | null;
  numPages?: number | null;
}

const useBooks = () => {
  // 'book' bekommt neue Speicheradresse (neue Referenze) ('setBook' behält die gleiche Referenz)

  // TODO: Replace with Redux slice
  const [books, setBooks] = useState<BookI[]>([]);

  // 'fetchData' bekommt eine neue Speicheradresse (neue Referenz), wenn sich die isbn ändert.
  const fetchData = async () => {
    const response = await fetch(`http://localhost:4730/books`);
    const result = await response.json();
    // TODO: store result of data fetch of all books in Redux book slice
    setBooks(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [books, fetchData] as const;
};

export default useBooks;
