import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                setData(res[currency]);
                console.log("Fetched inside useEffect:", res[currency]);
            });
    }, [currency]);

    console.log("Rendered with data:", data);
    return data;
}

export default useCurrencyInfo;
