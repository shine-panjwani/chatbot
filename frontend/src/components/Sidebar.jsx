import { useContext, useEffect } from "react";
import { MessageContext } from "../context/MessageContext";
import useFetch from "../hooks/useFetchHook";
export default function Sidebar() {
  const messageContext = useContext(MessageContext);
  const { data, setData, setId } = messageContext;
  const response = useFetch("http://localhost:3000/api/thread");
    setData(response);
  return (
    <div className="w-full h-full rounded-lg bg-zinc-900 p-2 space-y-2">
      <div 
      onClick={()=>{
        setId(Math.floor(Math.random()*10000 )+1);
      }}
         className="w-full px-4 py-3 text-sm text-white bg-zinc-800 rounded-lg hover:bg-zinc-700 cursor-pointer transition-colors"
      >New Chat</div>
      {data.map((res) => (
        <div
          onClick={() => {
            setId(res.threadId);
          }}
          key={res.threadId}
          className="w-full px-4 py-3 text-sm text-white bg-zinc-800 rounded-lg hover:bg-zinc-700 cursor-pointer transition-colors"
        >
          {res.title}
        </div>
      ))}
    </div>
  );
}
