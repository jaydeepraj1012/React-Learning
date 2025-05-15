import React, { useState, useEffect } from "react";

function DiceRollerGame() {
  const [dice1, setDice1] = useState(1);
  const [rolling, setRolling] = useState(false);
  function rollDice() {
    setRolling(true);
    setTimeout(() => {
      setRolling(false);

      const randomNumber = Math.floor(Math.random() * 6) + 1;
      console.log(randomNumber);
      setDice1(randomNumber);
    }, 1000);
  }
  useEffect(() => {
    rollDice();
  }, []);

  return (
    <>
      <h1 className="text-center text-4xl font-bold mb-4 p-6">Project 7</h1>
      <h1 className="text-center text-4xl font-bold mb-8 text-gray-800">
        Dice Roller Game
      </h1>    
      <span className="text-4xl font-bold mb-4 p-6">{dice1}</span>
      <div className="flex justify-center">
        <button
          onClick={rollDice}
          className={`
              bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg
              text-xl transition-all duration-200 transform hover:scale-105
              shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500
             
            `}
        >
          {rolling ? "Rolling..." : "Roll Dice"}
        </button>
      </div>
    </>
  );
}

export default DiceRollerGame;

// import { useState, useEffect } from 'react';

// export default function DiceRollerGame() {
//   const [dice1, setDice1] = useState(1);
//   const [dice2, setDice2] = useState(6);
//   const [rolling, setRolling] = useState(false);
//   const [totalRolls, setTotalRolls] = useState(0);
//   const [rollHistory, setRollHistory] = useState([]);

//   // Function to roll the dice
//   const rollDice = () => {
//     if (rolling) return;

//     setRolling(true);

//     // Simulate dice rolling animation
//     let counter = 0;
//     const rollInterval = setInterval(() => {
//       setDice1(Math.floor(Math.random() * 6) + 1);
//       setDice2(Math.floor(Math.random() * 6) + 1);
//       counter++;

//       if (counter > 10) {
//         clearInterval(rollInterval);
//         const finalDice1 = Math.floor(Math.random() * 6) + 1;
//         const finalDice2 = Math.floor(Math.random() * 6) + 1;
//         setDice1(finalDice1);
//         setDice2(finalDice2);

//         // Update history and stats
//         setTotalRolls(prev => prev + 1);
//         setRollHistory(prev => [{
//           id: Date.now(),
//           dice1: finalDice1,
//           dice2: finalDice2,
//           sum: finalDice1 + finalDice2
//         }, ...prev].slice(0, 10));

//         setRolling(false);
//       }
//     }, 50);
//   };

//   // Generate dice face based on value
//   const renderDiceFace = (value) => {
//     // Map of dice value to dot positions
//     const dotPositions = {
//       1: [{ top: '50%', left: '50%' }],
//       2: [
//         { top: '25%', left: '25%' },
//         { top: '75%', left: '75%' }
//       ],
//       3: [
//         { top: '25%', left: '25%' },
//         { top: '50%', left: '50%' },
//         { top: '75%', left: '75%' }
//       ],
//       4: [
//         { top: '25%', left: '25%' },
//         { top: '25%', left: '75%' },
//         { top: '75%', left: '25%' },
//         { top: '75%', left: '75%' }
//       ],
//       5: [
//         { top: '25%', left: '25%' },
//         { top: '25%', left: '75%' },
//         { top: '50%', left: '50%' },
//         { top: '75%', left: '25%' },
//         { top: '75%', left: '75%' }
//       ],
//       6: [
//         { top: '25%', left: '25%' },
//         { top: '25%', left: '50%' },
//         { top: '25%', left: '75%' },
//         { top: '75%', left: '25%' },
//         { top: '75%', left: '50%' },
//         { top: '75%', left: '75%' }
//       ]
//     };

//     return (
//       <div className={`relative w-24 h-24 bg-white rounded-lg shadow-md transition-transform duration-150 ${rolling ? 'animate-bounce' : ''}`}>
//         {dotPositions[value].map((pos, index) => (
//           <div
//             key={index}
//             className="absolute w-4 h-4 bg-black rounded-full"
//             style={{
//               top: pos.top,
//               left: pos.left,
//               transform: 'translate(-50%, -50%)'
//             }}
//           ></div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex flex-col items-center justify-center p-4">
//       <h1 className="text-center text-4xl font-bold mb-8 text-gray-800">
//         Dice Roller Game
//       </h1>

//       <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-8 mb-8">
//         <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-8">
//           {renderDiceFace(dice1)}
//           <span className="text-4xl font-bold">+</span>
//           {renderDiceFace(dice2)}
//           <span className="text-4xl font-bold">=</span>
//           <span className="text-5xl font-bold text-blue-600">{dice1 + dice2}</span>
//         </div>

//         <div className="flex justify-center">
//           <button
//             onClick={rollDice}
//             disabled={rolling}
//             className={`
//               bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg
//               text-xl transition-all duration-200 transform hover:scale-105
//               shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500
//               ${rolling ? 'opacity-50 cursor-not-allowed' : ''}
//             `}
//           >
//             {rolling ? 'Rolling...' : 'Roll Dice'}
//           </button>
//         </div>
//       </div>

//       {rollHistory.length > 0 && (
//         <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-6">
//           <h2 className="text-xl font-bold mb-4 text-gray-700">Roll History</h2>
//           <div className="grid grid-cols-4 gap-2 text-center font-medium mb-2 border-b pb-2">
//             <div className="text-gray-500">Roll</div>
//             <div className="text-gray-500">Die 1</div>
//             <div className="text-gray-500">Die 2</div>
//             <div className="text-gray-500">Sum</div>
//           </div>

//           {rollHistory.map((roll, index) => (
//             <div key={roll.id} className="grid grid-cols-4 gap-2 text-center py-2 border-b last:border-0">
//               <div className="text-gray-600">#{totalRolls - index}</div>
//               <div>{roll.dice1}</div>
//               <div>{roll.dice2}</div>
//               <div className="font-bold text-blue-600">{roll.sum}</div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
