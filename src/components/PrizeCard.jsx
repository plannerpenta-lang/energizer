export default function PrizeCard({ icon, title, description, featured = false }) {
  if (featured) {
    return (
      <div
        className="relative col-span-full md:col-span-2 lg:col-span-1 overflow-hidden shadow-2xl shadow-energizer-red/40"
        style={{ background: 'linear-gradient(135deg, #F8A723 0%, #EE3A43 100%)' }}
      >
        {/* Speed lines in background */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <line x1="-10%" y1="20%" x2="110%" y2="10%" stroke="#fff" strokeWidth="1" opacity="0.1" />
          <line x1="-10%" y1="40%" x2="110%" y2="30%" stroke="#fff" strokeWidth="2" opacity="0.07" />
          <line x1="-10%" y1="60%" x2="110%" y2="50%" stroke="#fff" strokeWidth="1" opacity="0.1" />
          <line x1="-10%" y1="80%" x2="110%" y2="70%" stroke="#fff" strokeWidth="1.5" opacity="0.07" />
        </svg>

        <div className="relative p-8 flex flex-col items-center text-center">
          <span className="headline text-7xl mb-2 block leading-none">🏆</span>
          <span className="bg-black text-energizer-yellow text-xs font-black uppercase tracking-wider px-4 py-1 mb-4 inline-block">
            Premio Mayor
          </span>
          <h3 className="headline text-4xl text-white mb-2">{title}</h3>
          <p className="text-white/80 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    )
  }

  return (
    <div
      className="border-l-4 border-energizer-yellow bg-white/5 p-6 flex flex-col hover:bg-white/10 transition-all duration-300 group"
      style={{ borderRadius: '0 1rem 1rem 0' }}
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="headline text-2xl text-white mb-1 group-hover:text-energizer-yellow transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}
