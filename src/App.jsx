import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/Bottles/Bottles";

const bottlesPromised = fetch("./bottles.json").then((res) => res.json());

function App() {
  return (
    <>
      <h1>My Awesome Watter Bottlest</h1>
      <Suspense fallback={<h2>Bottles are Lodding</h2>}>
        <Bottles bottlesPromised={bottlesPromised}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
