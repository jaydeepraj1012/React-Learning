import React, { useState } from "react";
import Swal from "sweetalert2";

function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const todaydate = new Date();
  const today = todaydate.toISOString().split("T")[0];
  const [todayDate, setTodayDate] = useState(today);
  function handleCalculate() {
    const todaydate = new Date();
    const birthdate = new Date(dob);
    const year = todaydate.getFullYear() - birthdate.getFullYear();
    const month = todaydate.getMonth() - birthdate.getMonth();
    const day = todaydate.getDate() - birthdate.getDate();
    let ageString = "";
    if (year > 0) {
      ageString += year + " years ";
    }
    if (month > 0) {
      ageString += month + " months ";
    }
    if (day > 0) {
      ageString += day + " days";
    }
    if (ageString === "") {
      ageString = "0 days";
    }
    setAge(ageString);
    Swal.fire({
      title: "Age Calculated!",
      text: `Your age is ${ageString}`,
      icon: "success",
      confirmButtonText: "OK",
    });
  }
  return (
    <>
      <h1 className="text-center text-4xl font-bold mb-4 p-6">Project 5</h1>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 p-6">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Date Difference Calculator
          </h1>

          <div className="mb-6">
            <label
              htmlFor="date-input"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Select Date
            </label>
            <input
              id="date-input"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              max={todayDate}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              required
            />
          </div>

          <button
            onClick={handleCalculate}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Calculate Difference
          </button>

          {age && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h2 className="text-lg font-medium text-gray-700 mb-2">
                Result:
              </h2>
              <p className="text-2xl font-bold text-blue-600">{age}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AgeCalculator;
