export default function StepCard({ number, icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-energizer-yellow/50 transition-all duration-300 group">
      <div className="relative mb-4">
        <div className="w-16 h-16 rounded-full bg-energizer-yellow flex items-center justify-center text-energizer-black text-2xl shadow-lg shadow-energizer-yellow/30">
          {icon}
        </div>
        <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-energizer-red text-white text-xs font-black flex items-center justify-center shadow">
          {number}
        </span>
      </div>
      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-energizer-yellow transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
