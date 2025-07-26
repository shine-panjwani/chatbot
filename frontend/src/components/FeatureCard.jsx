export default function FeaturesCards() {
  const features = [
    {
      icon: "⚡",
      title: "Ultra Fast",
      description:
        "Experience blazing fast AI responses powered by optimized backend and caching systems.",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: "🔒",
      title: "100% Secure",
      description:
        "Your conversations are end-to-end encrypted, keeping your data private and safe.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "🤖",
      title: "Smarter AI",
      description:
        "Our AI learns and adapts to give you the most accurate and helpful answers.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "☁️",
      title: "Cloud Synced",
      description:
        "Access your chats and saved prompts anytime, anywhere from any device.",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: "🌐",
      title: "Multi-Platform",
      description:
        "Works seamlessly across web, mobile, and desktop with real-time sync.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: "🛠️",
      title: "Customizable",
      description:
        "Tailor your AI assistant with plugins, themes, and personal preferences.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: "📈",
      title: "Analytics Ready",
      description:
        "Track your conversations and prompt efficiency with built-in analytics.",
      color: "from-lime-500 to-green-500",
    },
    {
      icon: "🧠",
      title: "Context Memory",
      description:
        "The AI remembers context across sessions for more natural conversations.",
      color: "from-fuchsia-500 to-purple-500",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
      {features.map((feature, index) => (
        <div
          key={index}
          className="relative group bg-zinc-900/80 backdrop-blur-md rounded-xl p-8 border border-zinc-700 hover:border-transparent hover:scale-[1.07] transform transition-all duration-300 min-h-[260px]"
        >
          {/* Gradient border effect */}
          <div
            className={`absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition duration-300`}
          ></div>

          <div className="relative z-10 flex flex-col h-full">
            <div
              className={`w-14 h-14 mb-5 flex items-center justify-center rounded-full text-white text-2xl bg-gradient-to-r ${feature.color}`}
            >
              {feature.icon}
            </div>
            <h3 className="text-white text-lg font-semibold mb-3">
              {feature.title}
            </h3>
            <p className="text-white/90 text-sm leading-relaxed">
              {feature.description}
            </p>
            {/* Small arrow CTA */}
            <div className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition duration-300 text-indigo-950 text-sm cursor-pointer">
              Learn More →
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
