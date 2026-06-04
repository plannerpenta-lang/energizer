export default function StepCard({ number, icon, title, description }) {
  return (
    <div
      className="relative overflow-hidden border-l-4 border-energizer-yellow group transition-transform duration-300 hover:translate-x-2 cursor-default"
      style={{
        clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)',
        background: 'linear-gradient(135deg, #111 0%, #1a1a1a 100%)',
        padding: '1.5rem 2rem 1.5rem 1.5rem',
      }}
    >
      {/* Big decorative number in background */}
      <span
        className="headline absolute -bottom-4 -right-2 text-[7rem] leading-none select-none pointer-events-none"
        style={{ color: '#FFF200', opacity: 0.12 }}
        aria-hidden="true"
      >
        {number}
      </span>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon + number badge */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-energizer-yellow flex items-center justify-center text-energizer-black text-2xl flex-shrink-0">
            {icon}
          </div>
          <span className="headline text-4xl text-energizer-red leading-none">{number}</span>
        </div>
        <h3 className="headline text-2xl text-white mb-2 group-hover:text-energizer-yellow transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
