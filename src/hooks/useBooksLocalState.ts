import { useEffect, useState } from "react";

export interface BookI {
  title?: string | null;
  subtitle?: string | null;
  numPages?: number | null;
}

/**
 * Custom hook which uses local React state
 *
 * Compare this hook with 'src/hooks/useBooks.ts' hook which uses Redux.
 */
const useBooks = () => {
  // 'book' bekommt neue Speicheradresse (neue Referenze) ('setBook' behält die gleiche Referenz)
  const [books, setBooks] = useState<BookI[]>([]);

  // 'fetchData' bekommt eine neue Speicheradresse (neue Referenz), wenn sich die isbn ändert.
  const fetchData = async () => {
    const response = await fetch(`http://localhost:4730/books`);
    const result = await response.json();
    setBooks(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [books, fetchData] as const;
};

export default useBooks;
