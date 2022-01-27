import React from "react";

type NameProps = { name: string; age?: number; myNewProp?: number };

const Name: React.FC<NameProps> = ({ name, age = 25, children }) => {
  console.log("children", children);

  return (
    <>
      <div className="wrapper2" style={{ backgroundColor: "yellow" }}>
        React Element von {name} and my age is {age}
      </div>
      <div style={{ backgroundColor: "red" }}>
        {React.Children.map(children, (child, ind) =>
          ind === 0 ? child : null
        )}
      </div>
    </>
  );
};

export default Name;
