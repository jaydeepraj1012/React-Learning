import React, { useState } from "react";

function Counter() {
  var [a, b] = useState(0);
  return (
    <>
      <div className="project-1 bg-cyan-100 w-h-full h-screen flex flex-col items-center justify-center">
        <h1 className="text-center text-4xl font-bold mb-4 p-6">
          Project 1 Counter
        </h1>
        <div className="text-red">{a}</div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => b(a + 1)}
        >
          click me
        </button>
      </div>
    </>
  );
}

export default Counter;
