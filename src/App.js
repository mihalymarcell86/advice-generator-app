import { useState } from "react";

import Card from "./components/layout/Card";
import Advice from "./components/Advice";
import Divider from "./components/layout/Divider";
import DieButton from "./components/UI/DieButton";
import Attribution from "./components/Attribution";

function App() {
  const [advice, setAdvice] = useState({
    id: 117,
    advice: `It is easy to sit up and take notice, what's difficult is getting up and taking action.`,
  });
  const [error, setError] = useState(null);

  async function getAdvice() {
    setError(null);
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
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
