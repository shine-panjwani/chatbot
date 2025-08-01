import { useContext, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import axios from "axios";
import { MessageContext } from "../context/MessageContext";

export default function InputBox() {
  const { id, data, setData } = useContext(MessageContext);
  const [inputText, setInputText] = useState("");
  const debouncedValue = useDebounce(inputText);
  async function onBtnClick() {
    // setLoading(true);
    if(!id) return;
    console.log(debouncedValue);
    const res = await axios.post("http://localhost:3000/api/chat", {
      threadId: id,
      message: inputText,
    });
    console.log(res);
    
    setData((prevData)=>prevData.map((prev)=>
      prev.threadId === id?{
        ...prev, messages:[
          {role : "user", content : debouncedValue},
          {role : "assistant", content : res.data.response}
        ]
      }:prev
    ))
    setInputText("");
    console.log(data);
  }
  return (
    <div className="flex items-center justify-between w-full p-3 h-20 bg-zinc-800 rounded  text-gray-200 self-start mr-auto">
      <input
        className=" focus:outline-none flex h-15 items-center justify-between w-full  bg-zinc-800 rounded  text-gray-200 self-start mr-auto"
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={onBtnClick}
        className="bg-zinc-600 rounded w-13 h-10 cursor-pointer"
      >
        Ask
      </button>
    </div>
  );
}
