// import './App.css';

import Apskritimai from "./Components/Apskritimai";

const data2 = [
  {
    apskritimasColor: "green",
  },
  {
    apskritimasColor: "yellow",
  },
  {
    apskritimasColor: "white",
  },
  {
    apskritimasColor: "pink",
  },
];

function App() {
  return (
    <>
      {data2.map((apskritimas, index) => (
        <Apskritimai
          key={index}
          apskritimasColor={apskritimas.apskritimasColor}
        />
      ))}
    </>
  );
}

export default App;

//Sukurti reacto aplikaciją kuri nupaišytų aštuonis skirtingų spalvų apskritimus, duomenis imant iš masyvo su aštuoniais hex spalvų kodais.
