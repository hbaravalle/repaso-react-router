import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [paises, setPaises] = useState("");
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch(url);
            let data = await response.json()
            setPaises(data)
            setIsLoaded(true)
        }
        fetchData()
    }, [])

    return { paises, isLoaded }
}