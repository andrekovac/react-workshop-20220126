import { useRef, useState } from "react";

const NameInput: React.FC = () => {
  const [name, setName] = useState<string>("");
  const fileInput = useRef<HTMLInputElement>(null);

  const sendForm = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("file name:", fileInput.current?.files?.[0].name);
    console.log(name);
  };

  return (
    <form onSubmit={sendForm} noValidate>
      <label htmlFor="name">Name</label>
      {/* ... */}
      <input
        required
        id="name"
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(event) => {
          console.log(event);
          setName(event.target.value);
        }}
      />
      <label htmlFor="file">Upload file</label>
      <input id="file" type="file" ref={fileInput} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NameInput;
