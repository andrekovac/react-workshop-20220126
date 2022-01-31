import { useCallback, useEffect, useState } from "react";

interface BookI {
  title?: string | null;
  subtitle?: string | null;
  numPages?: number | null;
}

const useBook = (isbn: number) => {
  // 'book' bekommt neue Speicheradresse (neue Referenze) ('setBook' behält die gleiche Referenz)
  const [book, setBook] = useState<BookI>({
    title: null,
    subtitle: null,
    numPages: null,
  });

  // 'fetchData' bekommt eine neue Speicheradresse (neue Referenz), wenn sich die isbn ändert.
  const fetchData = useCallback(async () => {
    const response = await fetch(`http://localhost:4730/books/${isbn}`);
    const result = await response.json();
    setBook(result);
  }, [isbn]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return book;
};

export default useBook;
