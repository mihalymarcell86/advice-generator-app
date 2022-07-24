import { useState, useEffect } from "react";

import Card from "./components/layout/Card";
import Advice from "./components/Advice";
import Divider from "./components/layout/Divider";
import DieButton from "./components/UI/DieButton";
import Attribution from "./components/Attribution";

function App() {
  const [advice, setAdvice] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    getAdvice(117);
  }, []);

  async function getAdvice(number) {
    let URL = "https://api.adviceslip.com/advice";
    if (!isNaN(number)) URL += `/${number}`;

    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      setError(null);
      const data = await response.json();
      setAdvice(data.slip);
    } catch (error) {
      setError(error);
    }
  }

  return (
    <>
      <Card>
        <Advice advice={advice} error={error} />
        <Divider />
        <DieButton onClick={getAdvice} error={error} />
      </Card>
      <Attribution />
    </>
  );
}

export default App;
