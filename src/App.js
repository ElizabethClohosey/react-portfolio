import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
// import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Content from "./components/content";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <section class="stars-background"> */}
        <div class="stars"></div>
        <div class="twinkling"></div>
        <div class="clouds"></div>
        <div className="wrapper">
          <Header />
          <Route exact path="/" render={(props) => <Content {...props} />} />
        </div>
      </div>
    </Router>
  );
}

export default App;
