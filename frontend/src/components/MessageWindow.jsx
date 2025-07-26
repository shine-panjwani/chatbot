import { useContext } from "react";
import useFetch from "../hooks/useFetchHook";
import InputBox from "./InputBox";
// import {ScaleLoader} from "react-spinners"
import { MessageContext } from "../context/MessageContext";
export default function MessageWindow() {
  const { id, loading } = useContext(MessageContext);
  console.log(id);
  const data = useFetch(`http://localhost:3000/api/thread`);
  const foundMsg = data.find((x) => x.threadId === id);
  console.log(foundMsg);
  if (!foundMsg || !id) {
    return (
      <div className="h-full flex flex-col bg-zinc-900 rounded-xl shadow-xl border border-zinc-800">
        <div className="flex-1 text-3xl font-bold flex items-center justify-center text-gray-300 p-6">
          How can I help???
        </div>

        <div className="p-4 rounded-2xl border-t border-zinc-700 bg-zinc-900">
          <InputBox />
        </div>
      </div>
    );
  }

  // const dataOfParticularTitle = foundMsg.messages;
  // console.log(dataOfParticularTitle);
  return (
    <div className="h-full flex flex-col bg-zinc-900 rounded-lg shadow-lg">
      {/* {loading && <ScaleLoader/>} */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {foundMsg.messages.map((message, index) => (
          <div key={index} className="flex flex-col">
            <div
              className={`max-w-[70%] m-2 p-2 text-white rounded-lg ${
                message.role === "user"
                  ? "bg-zinc-600 self-end"
                  : "bg-zinc-800 self-start"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 rounded-2xl border-t border-zinc-700 bg-zinc-900">
        <InputBox />
      </div>
    </div>
  );
}
