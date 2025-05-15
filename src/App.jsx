import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Todolist from "./Component/Todolist";
import Counter from "./Component/Counter";
import DigitalClock from "./Component/DigitalClock";
import TipCalculator from "./Component/TipCalculator";
import AgeCalculator from "./Component/AgeCalculator";
import RandomQuoteGenerator from "./Component/RandomQuoteGenerator";
import DiceRollerGame from "./Component/DiceRollerGame";
import ColorPickerApp from "./Component/ColorPickerApp";
import RandomPasswordGenerator from "./Component/RandomPasswordGenerator";
import WeatherApp from "./Component/WeatherApp";
import MovieSearchApp from "./Component/MovieSearchApp";

function App() {
  var [a, b] = useState(15);
  return (
    <>
      <Navbar />
      <Hero />
      <div className="bg-cyan-100 w-h-full h-full flex flex-col items-center justify-center">
     
        <Counter />
        <Todolist />
        <DigitalClock />
        <TipCalculator />
        <AgeCalculator />
        <RandomQuoteGenerator />
        <DiceRollerGame />
        <ColorPickerApp />
        <RandomPasswordGenerator />
        <WeatherApp   />
        <MovieSearchApp  />
      </div>
    </>
  );
}

export default App;
