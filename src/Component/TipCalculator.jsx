import React, { useState } from "react";

function TipCalculator() {
  const [bill, setBill] = React.useState(0);
  const [tip, setTip] = React.useState(0);
  const [people, setPeople] = React.useState(1);
  const [total, setTotal] = React.useState(0);
  const [perPerson, setPerPerson] = React.useState(0);
  const [tipAmount, setTipAmount] = React.useState(0);
  const [error, setError] = React.useState("");
  function handleBillChange(e) {
    if (bill <= 0 || tip <= 0 || people <= 0) {
      if (bill <= 0) {
        setError("Bill amount must be greater than 0");
      }
      if (tip <= 0) {
        setError("Tip percentage must be greater than 0");
      }
      return;
    }
    const tipAmounts = (parseFloat(bill) * parseFloat(tip)) / 100;
    setTipAmount(tipAmounts);
    const totalAmount =
      parseFloat(bill) + (parseFloat(bill) * parseFloat(tip)) / 100;
    setTotal(totalAmount);
    setPerPerson(totalAmount / parseInt(people));
    setBill(e.target.value);
    setError("");
  }

  return (
    <>
     <h1 className="text-center text-4xl font-bold mb-4 p-6">
          Project 4
        </h1>
      <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="bill" className="text-sm font-medium text-gray-700">
            Bill Amount
          </label>
          <input
            id="bill"
            type="number"
            placeholder="Enter bill amount"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <label htmlFor="tip" className="text-sm font-medium text-gray-700">
            Tip Percentage
          </label>
          <input
            id="tip"
            type="number"
            placeholder="Enter tip percentage"
            value={tip}
            onChange={(e) => setTip(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <label htmlFor="people" className="text-sm font-medium text-gray-700">
            Number of People
          </label>
          <input
            id="people"
            type="number"
            placeholder="Enter number of people"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div
          className="pt-4 border-t mt-4"
          style={{ display: total != 0 ? "block" : "none" }}
        >
          <h1 className="text-lg font-semibold text-gray-800">
            Total Amount: <span className="text-blue-600">{total}</span>
          </h1>
          <h1 className="text-lg font-semibold text-gray-800">
            Tip Amount <span className="text-green-600">{tipAmount}</span>
          </h1>
          <h1 className="text-lg font-semibold text-gray-800">
            Amount per person:{" "}
            <span className="text-green-600">{perPerson}</span>
          </h1>
        </div>
        <span className="text-red-500 text-sm font-medium mt-1 block">
          {error}
        </span>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleBillChange}
      >
        cal
      </button>
    </>
  );
}

export default TipCalculator;
