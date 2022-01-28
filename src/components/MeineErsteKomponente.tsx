import { useState } from "react";

const MeineErsteKomponente = () => {
  const [meinName, setMeinName] = useState("Denise");

  return (
    <div>
      <button onClick={() => setMeinName("Gamze")}>Name ändern</button>
      <div id="1">Hallo {meinName}</div>
    </div>
  );
};

export default MeineErsteKomponente;
