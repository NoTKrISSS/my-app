// import './App.css';

import Apskritimai from "./Components/Apskritimai";

const data2 = [
  {
    boxColor: "green",
  },
  {
    boxColor: "yellow",
  },
  {
    boxColor: "white",
  },
  {
    boxColor: "pink",
  },
];

function App2() {
  return (
    <>
      {data2.map((apskritimas, index) => (
        <Apskritimai key={index} boxColor={apskritimas.boxColor} />
      ))}
    </>
  );
}

export default App2;

//Sukurti reacto aplikaciją kuri nupaišytų aštuonis skirtingų spalvų apskritimus, duomenis imant iš masyvo su aštuoniais hex spalvų kodais.
