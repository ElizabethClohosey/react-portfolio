import "./App.scss";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <h1>Hi There</h1>
      <Button ovariant="primary" onClick={(e) => console.log("Sup")}>Testing</Button>
    </div>
  );
}

export default App;
