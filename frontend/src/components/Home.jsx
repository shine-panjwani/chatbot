import FeaturesCards from "./FeatureCard";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
export default function HomePage() {
  return (
    <>
     {/* HERO SECTION */}
<div className="relative min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white flex flex-col px-6 overflow-hidden">
  
  {/* Same Glow Blobs */}
  <div className="absolute -top-32 -left-40 w-[28rem] h-[28rem] bg-indigo-600/25 rounded-full blur-3xl animate-[pulse_7s_ease-in-out_infinite]"></div>
  <div className="absolute top-1/2 right-0 w-[22rem] h-[22rem] bg-purple-600/25 rounded-full blur-3xl animate-[pulse_10s_ease-in-out_infinite]"></div>

  {/* Floating Gradient Orbs */}
  <div className="absolute bottom-20 left-1/4 w-6 h-6 bg-indigo-400/40 rounded-full blur-sm animate-bounce"></div>
  <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-purple-400/50 rounded-full blur-sm animate-ping"></div>

  {/* Mesh Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-20"></div>

  {/* Gradient Lines */}
  <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
  <div className="absolute top-2/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

  {/* Hero Content */}
  <div className="relative z-10">
    <Navbar />
    <HeroSection />
  </div>
</div>

{/* FEATURES SECTION */}
<div className="relative min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white flex flex-col px-6 overflow-hidden">
  
  {/* Continue same glow blobs but reposition slightly */}
  <div className="absolute top-0 left-1/3 w-[26rem] h-[26rem] bg-indigo-600/25 rounded-full blur-3xl animate-[pulse_9s_ease-in-out_infinite]"></div>
  <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-purple-600/25 rounded-full blur-3xl animate-[pulse_11s_ease-in-out_infinite]"></div>

  {/* More floating elements */}
  <div className="absolute top-1/2 left-1/5 w-5 h-5 bg-indigo-300/50 rounded-full blur-sm animate-bounce delay-200"></div>
  <div className="absolute bottom-10 right-1/2 w-4 h-4 bg-purple-300/50 rounded-full blur-sm animate-ping"></div>

  {/* Same gradient mesh */}
  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-20"></div>

  {/* Gradient Lines */}
  <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
  <div className="absolute top-2/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

  {/* Features */}
  <div className="relative z-10">
    <FeaturesCards />
  </div>
</div>

    </>
  );
}
