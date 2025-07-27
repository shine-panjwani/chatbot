import { useContext, useEffect } from "react";
import { MessageContext } from "../context/MessageContext";
import useFetch from "../hooks/useFetchHook";
import axios from "axios";
import Trash from "../assets/Trash";
import Plus from "../assets/PlusIcom";
export default function Sidebar() {
  const messageContext = useContext(MessageContext);
  const { id, data, setData, setId } = messageContext;
  const response = useFetch("http://localhost:3000/api/thread");
  async function deleteBtn(){
    await axios.delete(`http://localhost:3000/api/thread/${id}`)
  }
  useEffect(() => {
    setData(response);
  }, [response]);
  return (
    <div className="w-full h-full rounded-lg bg-zinc-900 p-2 space-y-2">
      <div
        onClick={async () => {
          setId(Math.floor(Math.random()*10000 )+1);
          try {
            const res = await axios.post("http://localhost:3000/api/thread", {
              title: "new Chat",
              threadId: id,
              // id : newId
            });
          } catch (error) {
            console.log(error);
            
            // alert(error)
          }
        }}
        className="flex items-center justify-between w-full px-4 py-3 text-sm text-white bg-zinc-800 rounded-lg hover:bg-zinc-700 cursor-pointer transition-colors"
      >
        <div>New Chat</div>
        <div>{<Plus />}</div>
      </div>
      {data.map((res) => (
        <div
          onClick={() => {
            setId(res.threadId);
          }}
          key={res.threadId}
          className="w-full px-4 py-3 text-sm text-white bg-zinc-800 rounded-lg flex items-center justify-between hover:bg-zinc-700 cursor-pointer transition-colors"
        >
          <div>{res.title}</div>
          <div onClick={deleteBtn}>{<Trash />}</div>
        </div>
      ))}
    </div>
  );
}
