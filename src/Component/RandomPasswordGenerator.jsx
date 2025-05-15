import React ,{useState} from 'react'


function RandomPasswordGenerator() {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(8);
    const [includeUppercase, setIncludeUppercase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
    const [isPasswordCopied, setIsPasswordCopied] = useState(false);
    const [error, setError] = useState(null);
    function Generatepassword() {
        setIsPasswordGenerated(true);
        setIsPasswordCopied(false);
        setError(null);
        if (length < 1) {
            setError("Password length must be at least 1");
            return;
        }
        let charset = "abcdefghijklmnopqrstuvwxyz";
        if (includeUppercase) {
            charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if (includeNumbers) {
            charset += "0123456789";
        }
        if (includeSymbols) {
            charset += "!@#$%^&*()_+[]{}|;:,.<>?";
        }
        let generatedPassword = "";
        console.log(charset);
        console.log(length);
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            generatedPassword += charset[randomIndex];
        }
        setPassword(generatedPassword);
        console.log(generatedPassword);
    }
    
  return (
    <>
    <div>RandomPasswordGenerator</div>
     <div className="project-1 bg-cyan-100 w-h-full h-screen flex flex-col items-center justify-center">

        </div>
        <h1 className="text-center text-4xl font-bold mb-4 p-6">
          Project 7
        </h1>   
        <div className="text-red">Random Password Generator</div>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          placeholder="Password Length"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <label>
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
          />
          Include Uppercase Letters
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          Include Numbers
        </label>    
        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
          Include Symbols
        </label>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={Generatepassword}
        >
          Generate Password
        </button>
        {isPasswordGenerated && (
          <div>
            <p>{password}</p>
            <i></i>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                navigator.clipboard.writeText(password);
                setIsPasswordCopied(true);
              }}
            >
              {isPasswordCopied ? "Copied!" : "Copy Password"}
            </button>
          </div>
        )}
        {error && <p className="text-red-500">{error}</p>}
    </>
  )
}

export default RandomPasswordGenerator