export default function WinnerRow({ name, city, prize, date }) {
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  const colors = ['bg-energizer-red', 'bg-energizer-orange', 'bg-blue-600', 'bg-purple-600', 'bg-green-600']
  const colorIndex = name.charCodeAt(0) % colors.length

  return (
    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-energizer-yellow/30 transition-all">
      <div className={`w-10 h-10 rounded-full ${colors[colorIndex]} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
        {initials}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white font-semibold text-sm truncate">{name}</p>
        <p className="text-gray-400 text-xs">{city}</p>
      </div>
      <div className="text-right flex-shrink-0">
        <p className="text-energizer-yellow font-semibold text-sm">{prize}</p>
        {date && <p className="text-gray-500 text-xs">{date}</p>}
      </div>
    </div>
  )
}
