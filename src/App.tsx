import React, { FC } from "react";
import "./App.css";

const meinValue: "Andre" | "David" = "Andre";

const App: FC = () => {
  const [name, setName] = React.useState("Andre");
  const [age, setAge] = React.useState(20);

  const [person, setPerson] = React.useState({
    name: "Andre",
    age: 20,
  });

  return (
    <>
      <div className="wrapper2" style={{ backgroundColor: "yellow" }}>
        React Element von {person.name} and my age is {person.age}
      </div>
      <button
        onClick={() => {
          // name = "Max";
          setName("Max");
          setAge(30);

          setPerson({
            name: "Max",
            age: 30,
          });

          console.log("name", name);
        }}
      >
        Hier klicken
      </button>
    </>
  );
};

export default App;
