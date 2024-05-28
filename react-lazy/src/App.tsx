import "./App.css";
import React from "react";
import Layout from "./components/Layout";
import Router from "./Router";

const App: React.FC = () => {
  return (
    <>
      <Layout />
      <Router />
    </>
  );
};

export default App;
