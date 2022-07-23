import Card from "./components/layout/Card";
import Divider from "./components/layout/Divider";
import DieButton from "./components/DieButton";

import Advice from "./components/Advice";
import Attribution from "./components/Attribution";

function App() {
  return (
    <>
      <Card>
        <Advice />
        <Divider />
        <DieButton />
      </Card>
      <Attribution />
    </>
  );
}

export default App;
