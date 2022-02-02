import { Dispatch } from "@reduxjs/toolkit";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreT } from "../store";
import { addBooks, AddBooksAction } from "../store/slices/books";

export interface BookI {
  isbn?: string | null;
  title?: string | null;
  subtitle?: string | null;
  numPages?: number | null;
}

/**
 * Custom hook which uses Redux
 *
 * Compare this hook with 'src/hooks/useBooksLocalState.ts' which uses local React state.
 */
const useBooks = () => {
  const dispatch = useDispatch<Dispatch<AddBooksAction>>();
  // select books slice from Redux store
  const books = useSelector<StoreT>((state) => state.books.books);

  // 'fetchData' bekommt eine neue Speicheradresse (neue Referenz), wenn sich die isbn ändert.
  const fetchData = useCallback(async () => {
    const response = await fetch(`http://localhost:4730/books`);
    const result = await response.json();

    // dispatch to Redux store
    dispatch(addBooks(result));
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [books as BookI[], fetchData] as const;
};

export default useBooks;
