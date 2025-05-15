import React, { useState } from "react";
import Swal from "sweetalert2";

function ColorPickerApp() {
  const [color, setColor] = useState("#000000");
  const [isColorSelected, setIsColorSelected] = useState(false);
  function handleColorChange() {
    setIsColorSelected(true);
    console.log(color);
    copyColorToClipboard(color);
    setTimeout(() => setIsColorSelected(false), 1000);
    Swal.fire({
      title: "Color Copied!",
      text: `The color ${color} has been copied to your clipboard.`,
      icon: "success",
      confirmButtonText: "OK",
    });
  }

  function copyColorToClipboard(color) {
    if (navigator.clipboard && window.isSecureContext) {
      // Modern way
      navigator.clipboard.writeText(color).then(() => {
        console.log("Color copied via clipboard API");
      });
    } else {
      // Fallback for mobile/older browsers
      const input = document.createElement("input");
      input.value = color;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      console.log("Color copied via fallback method");
    }
  }

  return (
    <>
      <div className="project-1 bg-cyan-100 w-h-full h-screen flex flex-col items-center justify-center">
        <h1 className="text-center text-4xl font-bold mb-4 p-6">Project 8</h1>
        <div className="text-red">Color Picker</div>
        <input
          type="color"
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleColorChange}
        >
          {isColorSelected ? "Copy Color" : "Pick Color"}
        </button>
      </div>
    </>
  );
}

export default ColorPickerApp;
