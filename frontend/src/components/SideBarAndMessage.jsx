import Sidebar from "./Sidebar";
import MessageWindow from "./MessageWindow";
export default function SideBarAndMessage() {
  return <div className="flex h-screen bg-zinc-950 text-white">
    <div className="w-[25%] border-r border-zinc-800 p-4 overflow-y-au">
      <Sidebar />
    </div>
    <div className="w-[75%] overflow-y-auto border-zinc-800 p-4 overflow-y-au">
      <MessageWindow />
    </div>
  </div>;
}
