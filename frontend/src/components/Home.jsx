import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import SideBarAndMessage from "./SideBarAndMessage";
export default function HomePage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br bg-zinc-950 text-white flex flex-col px-6">
        <Navbar />
        <HeroSection />
      </div>
      <SideBarAndMessage />
    </>
  );
}
