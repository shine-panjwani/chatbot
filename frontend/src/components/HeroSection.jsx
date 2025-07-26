import { useNavigate } from "react-router-dom";
import { styles } from "./Navbar";
export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="text-center max-w-3xl flex mt-45 items-center flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empower Your Ideas with{" "}
            <span className="text-indigo-500">Smarter Conversations</span>
          </h1>
          <p className="text-zinc-400 text-lg mb-4">
            Your personal AI assistant is here to simplify complex thoughts,
            generate ideas, and answer anything — instantly.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button onClick={()=>{
              navigate("/login")
            }} className={`${styles} bg-indigo-500`}>Start Chat</button>
            <button
              className={`hover:border-indigo-500 hover:text-indigo-400 ${styles}`}
            >
              Explore Features
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
