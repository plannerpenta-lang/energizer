// Tamaños: sm (32px), md (48px), lg (64px), xl (96px)
// Colores de fondo: "red" (#EE3A43), "yellow" (#FFF200), "black" (#000000), "white" (#FFFFFF)
// En yellow y white el icono es negro, en red y black el icono es blanco

export default function Icon({ name, size = 'md', bg = 'red', className = '' }) {
  const sizes = { sm: 32, md: 48, lg: 64, xl: 96 }
  const px = sizes[size]
  const iconColor = (bg === 'yellow' || bg === 'white') ? '#000000' : '#FFFFFF'
  const bgColor = { red: '#EE3A43', yellow: '#FFF200', black: '#000000', white: '#FFFFFF' }[bg]

  const icons = {
    // Batería (productos, pilas)
    battery: (
      <svg viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="16" height="10" rx="0" />
        <path d="M22 11v2" strokeWidth="3" strokeLinecap="square" />
        <path d="M6 11h4M8 9v4" />
      </svg>
    ),
    // Carrito / compra
    cart: (
      <svg viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" strokeLinejoin="miter"/>
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
    // Ticket / registro
    ticket: (
      <svg viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9v-2a1 1 0 011-1h16a1 1 0 011 1v2a2 2 0 000 4v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2a2 2 0 000-4z" />
        <line x1="12" y1="6" x2="12" y2="18" strokeDasharray="2 2" />
      </svg>
    ),
    // Target / participar
    target: (
      <svg viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" fill={iconColor} stroke="none"/>
      </svg>
    ),
    // Trofeo / ganar
    trophy: (
      <svg viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 21h8M12 17v4M7 4H4a1 1 0 00-1 1v3c0 3 2 5.5 5 6" />
        <path d="M17 4h3a1 1 0 011 1v3c0 3-2 5.5-5 6" />
        <path d="M7 4h10v7a5 5 0 01-10 0V4z" />
      </svg>
    ),
    // Avión / viaje
    plane: (
      <svg viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill={iconColor} stroke="none"/>
      </svg>
    ),
    // Smartphone
    phone: (
      <svg viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="0" />
        <line x1="12" y1="18" x2="12" y2="18" strokeWidth="3" strokeLinecap="square" />
      </svg>
    ),
    // Audífonos
    headphones: (
      <svg viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0118 0v6" />
        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3z" />
        <path d="M3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
      </svg>
    ),
    // Tablet
    tablet: (
      <svg viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="0" />
        <line x1="12" y1="18" x2="12" y2="18" strokeWidth="3" strokeLinecap="square" />
      </svg>
    ),
    // Regalo / premios instantáneos
    gift: (
      <svg viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 12 20 22 4 22 4 12" />
        <rect x="2" y="7" width="20" height="5" />
        <line x1="12" y1="22" x2="12" y2="7" />
        <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" />
        <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
      </svg>
    ),
    // Cámara / foto ticket
    camera: (
      <svg viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
    // Linterna
    flashlight: (
      <svg viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6L6 6L4 10h16L18 6z" />
        <rect x="6" y="10" width="12" height="10" />
        <line x1="9" y1="20" x2="9" y2="24" />
        <line x1="15" y1="20" x2="15" y2="24" />
        <circle cx="12" cy="15" r="2" fill={iconColor} stroke="none"/>
      </svg>
    ),
    // Check / éxito
    check: (
      <svg viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    // Advertencia / alerta
    warning: (
      <svg viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
        <polygon points="12 2 22 22 2 22" />
        <line x1="12" y1="9" x2="12" y2="14" strokeWidth="2.5" />
        <line x1="12" y1="18" x2="12" y2="18" strokeWidth="3" />
      </svg>
    ),
    // Estrella
    star: (
      <svg viewBox="0 0 24 24" fill={iconColor} stroke="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  }

  return (
    <div
      className={`flex items-center justify-center flex-shrink-0 ${className}`}
      style={{ width: px, height: px, backgroundColor: bgColor }}
    >
      <div style={{ width: px * 0.55, height: px * 0.55 }}>
        {icons[name] || icons.star}
      </div>
    </div>
  )
}
