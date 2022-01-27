import React, { FC } from "react";
import "./App.css";
import Name from "./components/Name";

const App: FC = () => {
  const [name, setName] = React.useState("Andre");
  const [age, setAge] = React.useState(20);

  const handleClick = () => {
    setName("Max");
    setAge(30);
  };

  return (
    <div>
      <button onClick={handleClick}>Hier klicken</button>
      <Name name={name} age={age} myNewProp={2343}>
        <>
          <span>Ich bin das Kind von der Name Komponent</span>
          <span>Ich bin das Kind von der Name Komponent</span>
        </>
      </Name>
      <Name name={name} />
    </div>
  );
};

export default App;
