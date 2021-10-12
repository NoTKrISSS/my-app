import Dezute from "./Components/Dezute";
import Apskritimas from "./Components/Apskritimas";

function App() {
  return (
    <>
      <Dezute buttonText={"SPAUSTI"} />;
      <Dezute buttonText={"STUMTI"} />;
      <Apskritimas color={"red"} buttonText={"SPAUSTI"} />
      <Apskritimas color={"yellow"} buttonText={"STUMTI"} />
    </>
  );
}

export default App;
