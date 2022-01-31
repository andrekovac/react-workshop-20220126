import React, { FC, useEffect } from "react";
import "./App.css";
import Book from "./components/Book";
import BookList from "./components/BookList";
import MeineErsteKomponente from "./components/MeineErsteKomponente";
import Name from "./components/Name";

const App: FC = () => {
  const [name, setName] = React.useState("Andre");
  const [age, setAge] = React.useState(20);

  const [isbn, setIsbn] = React.useState("");

  const fetchPhotos = async () => {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=2&limit=100"
    );
    const result = await response.json();
    // console.log(result);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const handleClick = () => {
    setName("Max");
    setAge(30);
  };

  const myIds = [0, 1, 2, 3, 4];

  return (
    <>
      <Book isbn={9781484201497} />
      {/* <button onClick={handleClick}>Hier klicken</button>
      <Name name={name} age={age} myNewProp={2343}>
        <span>Ich bin das Kind von der Name Komponente</span>
      </Name>
      {myIds.map((num) => (
        <Name key={num} name={name} />
      ))}
      <BookList /> */}
    </>
  );
};

export default App;
