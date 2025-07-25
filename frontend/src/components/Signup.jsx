import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
export default function Signup() {
  const [email,setEmail]=useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-4">
      <div className="bg-zinc-900 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Create Account</h2>
        
        <form onSubmit={async (e)=>{
          e.preventDefault()
          console.log(email);
          console.log(password);
          await axios.post("http://localhost:3000/api/signup",{
            email,
            password
          })
          navigate("/")
          setEmail("")
          setPassword("")
        }} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm text-zinc-400">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
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
              onChange={(e)=>setPassword(e.target.value)}
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
            Already have an account? <a href="/login" className="text-indigo-500 hover:underline">Login here</a>
          </p>
        </form>
      </div>
    </div>
  );
}
