import { useEffect, useState } from "react";
import axios from "axios";
export default  function useFetch(url){
    const [data,setData] = useState([])
    useEffect(()=>{
       async function getData() {
        try {
         const response = await axios.get(url);
         setData(response.data.response);
         } catch (error) {
          setData([])
        }
       }
       getData();
    },[url])
    return data;
}