import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <NavBar title="MyApp" homebtn="Home" />
      <TextForm heading="Enter the text to analysis" />
    </>
  );
}

export default App;
