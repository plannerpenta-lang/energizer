export default function PrizeCard({ icon, title, description, featured = false }) {
  if (featured) {
    return (
      <div className="relative col-span-full md:col-span-2 lg:col-span-1 bg-gradient-to-br from-energizer-yellow via-energizer-orange to-energizer-red rounded-2xl p-1 shadow-2xl shadow-energizer-orange/40">
        <div className="bg-black rounded-xl p-8 h-full flex flex-col items-center text-center">
          <div className="text-6xl mb-4">{icon}</div>
          <span className="bg-energizer-yellow text-black text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            Premio Mayor
          </span>
          <h3 className="text-white font-black text-2xl mb-2">{title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:border-energizer-yellow/40 hover:bg-white/10 transition-all duration-300">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}
