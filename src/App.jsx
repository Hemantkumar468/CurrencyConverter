import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './Hooks/useCurrencyInfo';

function App() {
  const [Amount, setAmount] = useState(0);
  const [From, setFrom] = useState("usd");
  const [To, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const CurrencyInfo = useCurrencyInfo(From);
  const option = Object.keys(CurrencyInfo);

  const swap = () => {
    setFrom(To);
    setTo(From);
    setConvertedAmount(Amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (CurrencyInfo[To]) {
      setConvertedAmount(Amount * CurrencyInfo[To]);
    }
  };

  return (
    <>
      <div
        className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/14751274/pexels-photo-14751274.jpeg?cs=srgb&dl=pexels-anntarazevich-14751274.jpg&fm=jpg')`,
        }}
      >
        <div className='w-full'>
          <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blue-sm bg-white/30'>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className='w-full mb-1'>
                <InputBox
                  label='from'
                  amount={Amount}
                  currencyOptions={option}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  onAmountChange={(val) => setAmount(val)}
                  selectCurrency={From}
                  oncurrencyChange={(amount)=> setAmount(amount)}
                />
              </div>

              <div className='relative w-full h-0.5'>
                <button
                  type='button'
                  className='absolute left-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                  onClick={swap}
                >
                  swap
                </button>
              </div>

              <div className='w-full mt-1 mb-4'>
                <InputBox
                  label='to'
                  amount={convertedAmount}
                  currencyOptions={option}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={To}
                  amountDisabled
                />
              </div>

              <button
                type='submit'
                className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
              >
                convert {From.toUpperCase()} to {To.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
