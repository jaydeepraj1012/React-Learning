import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Loading from "./Loading";

function RandomQuoteGenerator() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  function fetchRandomQuote() {
    const quote = [
      {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
      },
      {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
      },
      {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
      },
      {
        text: "Get busy living or get busy dying.",
        author: "Stephen King",
      },
      {
        text: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        author: "Brian Tracy",
      },
      {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
      },
    ];

    const randomIndex = Math.floor(Math.random() * quote.length);
    const randomQuote = quote[randomIndex];
    setQuote(randomQuote.text);
    setAuthor(randomQuote.author);
  }
  function copyQuote() {
    const quoteText = quote;

    if (navigator.clipboard && window.isSecureContext) {
      // Modern secure clipboard API
      navigator.clipboard.writeText(quoteText).then(() => {
        console.log("Quote copied via clipboard API");
      });
    } else {
      // Fallback for mobile/older browsers
      const input = document.createElement("textarea");
      input.value = quoteText;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      console.log("Quote copied via fallback method");
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    Swal.fire({
      title: "Quote Copied!",
      text: `The quote "${quote}" has been copied to your clipboard.`,
      icon: "success",
      confirmButtonText: "OK",
    });
  }

  return (
    <>
     {loading && <Loading loading ={loading} />}
      <h1 className="text-center text-4xl font-bold mb-4 p-6">Project 6</h1>
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex flex-col items-center justify-center p-4">
        <h1 className="text-center text-4xl font-bold mb-8 text-gray-800">
          Random Quote Generator
        </h1>

        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
          {quote ? (
            <div className="mb-6">
              <p className="text-2xl font-serif italic mb-4 text-gray-700">
                "{quote}"
              </p>
              <p className="text-right text-lg font-medium text-gray-600">
                - {author}
              </p>
            </div>
          ) : (
            <div className="mb-6 text-center text-gray-500 italic">
              Click the button below to get inspired
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={fetchRandomQuote}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              {quote ? "Get Another Quote" : "Get Random Quote"}
            </button>

            {quote && (
              <button
                onClick={copyQuote}
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              >
                {copied ? "Copied!" : "Copy Quote"}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default RandomQuoteGenerator;
