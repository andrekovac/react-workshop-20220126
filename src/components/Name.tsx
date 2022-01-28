import React from "react";

interface NameProps {
  name: string;
  age?: number;
  myNewProp?: number;
}

const Name: React.FC<NameProps> = ({ name, age = 25, children }) => {
  return (
    <>
      <div className="wrapper2" style={{ backgroundColor: "yellow" }}>
        React Element von {name} and mein Alter ist {age}
      </div>
      <div style={{ padding: 10, backgroundColor: "red" }}>{children}</div>
    </>
  );
};

export default Name;
