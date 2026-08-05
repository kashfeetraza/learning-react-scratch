import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo' 

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("pkr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const CurrencyInfo = useCurrencyInfo(from)
  const options = Object.keys(CurrencyInfo || {})

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const Convert = () => {
    if (CurrencyInfo && CurrencyInfo[to]) {
      setConvertedAmount(amount * CurrencyInfo[to])
    }
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/5746260/pexels-photo-5746260.jpeg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              Convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>

      {/* Profile Section */}
<section className="min-h-[400px] flex items-center justify-center p-6 w-full bg-cover bg-center bg-no-repeat bg-[linear-gradient(rgba(248,250,252,0.75),rgba(248,250,252,0.65)),url('https://media.istockphoto.com/id/505916542/photo/currency-exchange-notice-board.jpg?b=1&s=612x612&w=0&k=20&c=AjKK0zOVDQKfXN-cg4AxZWCazOErNJbKAYVT1Cu09SQ=')]"> 
  
  {/* Card background switched from stark slate-100 to clean white with matching shadow tint */}
  <div className="max-w-md w-full bg-white/95 backdrop-blur-[2px] rounded-2xl p-8 border border-slate-200/60 shadow-2xl shadow-slate-200/50 text-center"> 
    
    {/* Name: Switched from washed-out slate-700 to premium, deep slate-900 */}
    <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 mb-2"> 
      Kashfeet Raza 
    </h1> 
    
    {/* Title: Changed to an energetic indigo-600 to look more modern */}
    <p className="text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-4"> 
      Full Stack Developer 
    </p> 
    
    {/* Tech Stack: Replaced harsh amber-950 with an elegant, modern slate-500 */}
    <p className="text-slate-500 text-xs uppercase tracking-widest font-medium"> 
      HTML || JavaScript || React || TaiwindCSS 
    </p> 
  </div> 
</section>


    </div>
  );
}

export default App
