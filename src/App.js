import { useState } from "react";
import "./App.css";
import Alerts from "./components/Alerts";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <>
      <NavBar
        title="MyApp"
        homebtn="Home"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alerts alert={alert} />
      <TextForm
        showAlert={showAlert}
        heading="Enter the text to analysis"
        mode={mode}
      />
    </>
  );
}

export default App;
