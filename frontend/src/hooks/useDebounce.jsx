import { useEffect, useState } from "react";

export default function useDebounce(input){
    const [debouncedData,setDebouncedData]=useState(input);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebouncedData(input)
        },1000)
        return ()=>{
            clearTimeout(timer)
        }
    },[input])
    return debouncedData;
}