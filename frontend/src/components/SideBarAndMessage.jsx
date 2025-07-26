import Sidebar from "./Sidebar";
import MessageWindow from "./MessageWindow";

export default function SideBarAndMessage() {
  return (
    <div className="relative flex h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white overflow-hidden">

      {/* Background Glow Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-0 -right-32 w-[28rem] h-[28rem] bg-purple-600/30 rounded-full blur-3xl animate-[pulse_10s_ease-in-out_infinite]"></div>

      {/* Mesh Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-20"></div>

      {/* Gradient Beam Lines */}
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
      <div className="absolute top-2/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Main Content */}
      <div className="relative z-10 flex w-full">
        {/* Sidebar */}
        <div className="w-[25%] border-r border-zinc-800/70 p-4 overflow-y-auto backdrop-blur-sm bg-zinc-900/50">
          <Sidebar />
        </div>

        {/* Message Window */}
        <div className="w-[75%] overflow-y-auto p-4 backdrop-blur-sm bg-zinc-900/40">
          <MessageWindow />
        </div>
      </div>
    </div>
  );
}
