import React, { FC } from "react";
import "./App.css";
import BookList from "./components/BookList";
import Name from "./components/Name";

const App: FC = () => {
  const [name, setName] = React.useState("Andre");
  const [age, setAge] = React.useState(20);

  const handleClick = () => {
    setName("Max");
    setAge(30);
  };

  const myIds = [0, 1, 2, 3, 4];

  return (
    <>
      <button onClick={handleClick}>Hier klicken</button>
      <Name name={name} age={age} myNewProp={2343}>
        <span>Ich bin das Kind von der Name Komponente</span>
      </Name>
      {myIds.map((num) => (
        <Name key={num} name={name} />
      ))}
      <BookList />
    </>
  );
};

export default App;
