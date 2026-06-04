export default function WinnerRow({ name, city, prize, date }) {
  const initials = name.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase()
  return (
    <div className="flex items-center gap-4 py-4 px-4 border-b-2 border-[#E5E5E5] hover:bg-[#FFFBCC] transition-colors">
      <div className="w-10 h-10 bg-[#EE3A43] flex items-center justify-center text-white font-black text-sm flex-shrink-0">
        {initials}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-black font-bold text-sm truncate">{name}</p>
        <p className="text-gray-500 text-xs">{city}</p>
      </div>
      <div className="text-right flex-shrink-0">
        <p className="text-[#EE3A43] font-bold text-sm">{prize}</p>
        {date && <p className="text-gray-400 text-xs">{date}</p>}
      </div>
    </div>
  )
}
