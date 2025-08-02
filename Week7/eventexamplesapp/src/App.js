import Counter from "./components/Counter";
import WelcomeButton from "./components/WelcomeButton";
import SyntheticEventButton from "./components/SyntheticEventButton";
import CurrencyConvertor from "./components/CurrencyConvertor";

function App() {
  return (
    <div>
      <h1>React Events Example</h1>
      <Counter />
      <WelcomeButton />
      <SyntheticEventButton />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
