import { useState } from 'react'

const stepColors = ['#EE3A43', '#F8A723', '#C8A800', '#000000']
const stepBgHovers = ['#EE3A43', '#F8A723', '#FFF200', '#000000']
const titleHoverColors = ['#ffffff', '#ffffff', '#000000', '#FFF200']
const descHoverColors = ['#ffffff', '#ffffff', '#000000', '#FFF200']

export default function StepCard({ number, icon, title, description }) {
  const [hovered, setHovered] = useState(false)
  const color = stepColors[number - 1]

  return (
    <div
      className="relative p-6 transition-all duration-200 cursor-default"
      style={{
        border: `3px solid ${color}`,
        backgroundColor: hovered ? stepBgHovers[number - 1] : '#ffffff',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="headline absolute top-2 right-3 text-7xl leading-none select-none pointer-events-none"
        style={{ color, opacity: 0.15 }}
      >
        {number}
      </span>
      <div className="relative z-10">
        <div className="mb-3">{icon}</div>
        <h3
          className="headline text-2xl mb-2 transition-colors duration-200"
          style={{ color: hovered ? titleHoverColors[number - 1] : '#000000' }}
        >
          {title}
        </h3>
        <p
          className="text-sm leading-relaxed transition-colors duration-200"
          style={{ color: hovered ? descHoverColors[number - 1] : '#374151' }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}
