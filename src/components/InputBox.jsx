import React, { useId } from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    oncurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = ""
}) {
    const amountInputId = useId(); // Generate a unique ID for the input

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className='w-1/2'>
                <label htmlFor={amountInputId} className='text-black/40 mb-2 inline-block'>{label}</label>
                <input
                    id={amountInputId}
                    className='outline-none w-full bg-transparent py-1.5'
                    type='number'
                    placeholder='Amount'
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className='text-black/40 mb-2 w-full'>Currency types</p>
                <select
                    className='rounded-lg px-1 bg-gray-100 cursor-pointer outline-none'
                    value={selectCurrency} // Corrected prop name
                    onChange={(e) => oncurrencyChange && oncurrencyChange(e.target.value)}
                    disabled={currencyDisabled}
                >
                    {currencyOptions.map((currency) => ( // Use 'currency' instead of 'Options'
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
