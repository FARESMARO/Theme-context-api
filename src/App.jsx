import { useContext, useState } from "react";
import Home from "./components/Home";

import { ModeContext } from "./context/ModeContext";
import { THEMEMode } from "./context/ModeContext";

function App() {
  const initialTheme = useContext(ModeContext);
  const [Theme, setTheme] = useState(initialTheme);
  // console.log(initialTheme);
  return (
    <ModeContext.Provider value={{ Theme, setTheme }}>
      <div
        style={{
          Color: THEMEMode[Theme].textColor,
          backgroundColor: THEMEMode[Theme].backgroundColor,
        }}
      >
        <Home />
      </div>
    </ModeContext.Provider>
  );
}

export default App;
