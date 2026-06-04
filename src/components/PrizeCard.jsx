export default function PrizeCard({ icon, title, description, featured = false }) {
  if (featured) {
    return (
      <div className="relative col-span-full md:col-span-2 lg:col-span-1 bg-[#EE3A43] p-8 flex flex-col items-center text-center border-b-8 border-[#FFF200]">
        <div className="mb-3">{icon}</div>
        <span className="bg-black text-[#FFF200] text-xs font-black uppercase tracking-wider px-4 py-1 mb-4 inline-block">
          Premio Mayor
        </span>
        <h3 className="headline text-4xl text-[#FFF200] mb-2">{title}</h3>
        <p className="text-white/90 text-sm leading-relaxed">{description}</p>
      </div>
    )
  }

  return (
    <div className="bg-white p-6 flex flex-col hover:bg-[#F5F5F5] transition-all duration-200" style={{ border: '3px solid black' }}>
      <div className="mb-3">{icon}</div>
      <h3 className="headline text-2xl text-black mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}
