import "./App.scss";
// import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      {/* <section class="stars-background"> */}
      <div className="wrapper">
        <div class="stars"></div>
        <div class="twinkling"></div>
        <Header />
        {/* <Button ovariant="primary" onClick={(e) => console.log("Sup")}>Testing</Button> */}
        {/* </section> */}
      </div>
    </div>
  );
}

export default App;
