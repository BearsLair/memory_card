import Header from "./components/Header";
import CardBoard from "./components/CardBoard";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [randomizedData, setRandomizedData] = useState([]);

  useEffect(() => {});

  return (
    <>
      <Header />
      <CardBoard />
    </>
  );
}

export default App;
