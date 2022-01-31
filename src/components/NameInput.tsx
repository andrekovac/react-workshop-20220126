import { useState } from "react";

const NameInput: React.FC = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(event) => {
          console.log(event);
          setName(event.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NameInput;
