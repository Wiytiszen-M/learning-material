import { Link } from "react-router-dom";
import "./App.css";
import { Router } from "./routes";

const App = () => {
  return (
    <>
      <header className="App-header">
        <h1>React-Router</h1>
      </header>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "500px",
          margin: "0 auto",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Router />
    </>
  );
};

export default App;
