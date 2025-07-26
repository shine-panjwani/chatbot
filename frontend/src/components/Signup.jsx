import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white flex items-center justify-center px-4 overflow-hidden">
      
      {/* Background Glow Blobs */}
      <div className="absolute -top-20 -left-32 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-0 -right-32 w-[28rem] h-[28rem] bg-purple-600/30 rounded-full blur-3xl animate-[pulse_10s_ease-in-out_infinite]"></div>

      {/* Mesh Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-20"></div>

      {/* Gradient Beam Lines */}
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
      <div className="absolute top-2/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Signup Card */}
      <div className="relative z-10 bg-zinc-900/80 backdrop-blur-md p-8 rounded-lg shadow-lg border border-zinc-700 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Create Account</h2>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await axios.post(
              "http://localhost:3000/api/signup",
              { email, password },
              { withCredentials: true }
            );
            navigate("/");
            setEmail("");
            setPassword("");
          }}
          className="space-y-5"
        >
          <div>
            <label className="block mb-1 text-sm text-zinc-400">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-zinc-800 text-white rounded-md border border-zinc-700 focus:outline-none focus:border-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-zinc-400">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-zinc-800 text-white rounded-md border border-zinc-700 focus:outline-none focus:border-indigo-500"
              placeholder="Create a password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 transition-colors py-2 rounded-md font-medium"
          >
            Sign Up
          </button>

          <p className="text-sm text-zinc-400 text-center mt-4">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-indigo-500 hover:underline"
            >
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
