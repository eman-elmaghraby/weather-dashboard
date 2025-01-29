import { useEffect, useState } from "react"

export const useDebounce = (callback: (value:string) => void , delay: number) =>{
    const [debouncedValue, setDebouncedValue] = useState("")

    useEffect(() =>{
        const handler= setTimeout(() =>{
            callback(debouncedValue)
        },delay)

        return () => {
            clearTimeout(handler)
        }
    }, [debouncedValue, delay, callback])

 return (value: string) => setDebouncedValue(value)
}