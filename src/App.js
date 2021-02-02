import "./App.scss";
// import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Content from "./components/content";

function App() {
  return (
    <div className="App">
      {/* <section class="stars-background"> */}
      <div class="stars"></div>
      <div class="twinkling"></div>
      <div class="clouds"></div>
      <div className="wrapper">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
