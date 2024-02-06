import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <NavBar title="MyApp" homebtn="Home" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analysis" />
      </div>
    </>
  );
}

export default App;
